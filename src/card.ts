
export enum CardType {
    Stratagem = 'Stratagem',
    PsychicPower = 'Psychic Power',
    TacticalObjective = 'Tactical Objective'
}

export enum Justification {
    Left,
    Right,
    Center
};

export function RenderText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, w: number, h: number, how: Justification): void {
    if (ctx && text.length) {
        ctx.textBaseline = 'top'; // Make the text origin at the upper-left to make positioning easier
        let measure = ctx.measureText(text);
        const tw = measure.width;
        const th = measure.actualBoundingBoxDescent - measure.actualBoundingBoxAscent;

        if (how == Justification.Center) {
            ctx.fillText(text, x + Math.max((w - tw) / 2, 0), y + (h - th) / 2, w);
        }
        else if (how == Justification.Left) {
            ctx.fillText(text, x, y + (h - th) / 2, w);
        }
        else if (how == Justification.Right) {
            ctx.fillText(text, x + w - tw, y + (h - th) / 2, w);
        }
    }
}

export function RenderParagraph(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, w: number, how: Justification): number {
    let curY: number = y;
    if (ctx && text.length) {
        let lines: string[] = [];
        let currentLine: string[] = [];
        ctx.textBaseline = 'top'; // Make the text origin at the upper-left to make positioning easier
        let length = 0;
        const spaceWidth = ctx.measureText(" ").width;
        const heightMeasure = ctx.measureText(text);
        const th = (heightMeasure.actualBoundingBoxDescent - heightMeasure.actualBoundingBoxAscent) * 1.5;

        text.split(" ").forEach(function (word) {
            const measure: TextMetrics = ctx.measureText(word);
            if ((length + measure.width) > w) {
                lines.push(currentLine.join(" "));
                currentLine.length = 0;
                length = 0;
            }
            length += measure.width + spaceWidth;
            currentLine.push(word);
        });
        if (currentLine.length > 0) {
            lines.push(currentLine.join(" "));
        }

        for (let l of lines) {
            let measure = ctx.measureText(l);
            const tw = measure.width;
            if (how == Justification.Center) {
                ctx.fillText(l, x + Math.max((w - tw) / 2, 0), curY, w);
            }
            else if (how == Justification.Left) {
                ctx.fillText(l, x, curY, w);
            }
            else if (how == Justification.Right) {
                ctx.fillText(l, x + w - tw, curY, w);
            }
            curY += th;
        }
    }
    return curY;
}

export class Card {

    private _width: number = 0;
    private _height: number = 0;

    private static readonly headerFont = 24 + 'px ' + 'Teko';
    private static readonly titleFont = 28 + 'px ' + 'Teko';
    private static readonly fluffFont = 'italic ' + 14 + 'px ' + 'serif';
    private static readonly ruleFont = 14 + 'px ' + 'serif';
    private static readonly footFont = 18 + 'px ' + 'Teko';
    private static readonly valueFont = 24 + 'px ' + 'Teko';

    public _type: CardType = CardType.Stratagem;

    public _heading: string = "Stratagem";
    public _title: string = "<Title>";
    public _fluff: string = "<Fluff text>";
    public _rule: string = "<Rule text>"
    public _value: string = "1";

    public draw(ctx: CanvasRenderingContext2D, width: number, height: number) {

        this._width = width;
        this._height = height;

        ctx.clearRect(0, 0, this._width, this._height);

        ctx.lineJoin = 'round';
        ctx.strokeStyle = 'silver';
        this.roundRect(ctx, 1, 1, this._width - 2, this._height - 2, 20, false, true);

        const borderX = this._width * 0.05;
        const borderY = borderX;
        const borderWidth = this._width - 2 * borderX;
        const borderHeight = this._height - 2 * borderY;
        const borderLineWidth = borderX * 0.3;

        const textRegionHeight = 40;

        ctx.save();
        ctx.strokeStyle = 'grey';
        ctx.lineWidth = borderLineWidth;
        this.drawBorder(ctx, borderX, borderY, borderWidth, borderHeight, textRegionHeight);
        ctx.restore();

        const cardHeader = this._heading.toLocaleUpperCase();

        ctx.save();
        ctx.font = Card.headerFont;
        ctx.textBaseline = 'top';
        ctx.fillStyle = 'black';
        RenderText(ctx, cardHeader, borderX, borderY, borderWidth, textRegionHeight, Justification.Center);
        ctx.restore();

        let curY = borderY * 2 + textRegionHeight;
        const marginXLeft = borderX * 2;
        const marginXRight = this._width - 2 * borderX;
        const textWidth = marginXRight - marginXLeft;

        ctx.moveTo(marginXLeft, curY);
        ctx.lineTo(marginXRight, curY);
        ctx.stroke();

        const cardTitle = this._title.toLocaleUpperCase();

        ctx.save();
        ctx.font = Card.titleFont;
        ctx.textBaseline = 'top';
        ctx.fillStyle = 'black';
        RenderText(ctx, cardTitle, marginXLeft, curY, textWidth, textRegionHeight, Justification.Center);
        ctx.restore();

        curY += textRegionHeight;

        ctx.moveTo(marginXLeft, curY);
        ctx.lineTo(marginXRight, curY);
        ctx.stroke();

        curY += borderY;

        if (this._fluff.length > 0) {
            ctx.save();
            ctx.font = Card.fluffFont;
            ctx.fillStyle = 'black';
            curY = RenderParagraph(ctx, this._fluff, marginXLeft, curY, textWidth, Justification.Center);
            ctx.restore();
            curY += textRegionHeight / 2;
        }

        // Render separator icon (using line for now)
        ctx.moveTo(marginXLeft, curY);
        ctx.lineTo(marginXRight, curY);
        ctx.stroke();
        curY += textRegionHeight / 2;

        ctx.save();
        ctx.font = Card.ruleFont;
        ctx.fillStyle = 'black';
        curY = RenderParagraph(ctx, this._rule, marginXLeft, curY, textWidth, Justification.Center);
        ctx.restore();

        curY = this._height - borderY * 1.5 - textRegionHeight;

        if (this._type == CardType.Stratagem) {
            const cpBoxSize = textRegionHeight;
            // TODO: Render command points
            this.roundRect(ctx, marginXLeft * 2 + cpBoxSize, curY, textWidth - 2 * marginXLeft - cpBoxSize, textRegionHeight - 6, 8, false, true);

            ctx.save();
            ctx.font = Card.footFont;
            ctx.textBaseline = 'top';
            ctx.fillStyle = 'black';
            RenderText(ctx, 'COMMAND POINTS', marginXLeft * 2 + cpBoxSize, curY, textWidth - 2 * marginXLeft - cpBoxSize, textRegionHeight - 6, Justification.Center);
            ctx.restore();

            ctx.save();
            ctx.fillStyle = '#ba2222';
            this.bevelRect(ctx, marginXLeft * 2, curY - 3, cpBoxSize, cpBoxSize, 5, true, true);
            ctx.restore();

            ctx.save();
            ctx.font = Card.valueFont;
            ctx.textBaseline = 'top';
            ctx.fillStyle = '#f5f2f2';
            RenderText(ctx, this._value, marginXLeft * 2, curY - 3, cpBoxSize, cpBoxSize, Justification.Center);
            ctx.restore();
        }
        else if (this._type == CardType.PsychicPower) {
            // TODO: Render warp charge
        }
        else if (this._type == CardType.TacticalObjective) {
            // TODO: Render object number
        }
    }

    public toString(): string {
        return "Card: " + this._type.toString() + "  Title: " + this._title + "  Rule: " + this._rule + "  CP: " + this._value;
    }

    private roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number, fill: boolean, stroke: boolean) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }
    }

    private bevelRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, bevel: number, fill: boolean, stroke: boolean) {
        ctx.beginPath();
        ctx.moveTo(x, y + bevel);
        ctx.lineTo(x, y + height - bevel);
        ctx.lineTo(x + bevel, y + height);
        ctx.lineTo(x + width - bevel, y + height);
        ctx.lineTo(x + width, y + height - bevel);
        ctx.lineTo(x + width, y + bevel);
        ctx.lineTo(x + width - bevel, y);
        ctx.lineTo(x + bevel, y);
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }
    }

    private drawBorder(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, bevel: number) {
        this.bevelRect(ctx, x, y, width, height, bevel, false, true);
        ctx.moveTo(x, y + bevel);
        ctx.lineTo(x + width, y + bevel);
        ctx.stroke();
    }

}