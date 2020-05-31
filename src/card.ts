import { JsonProperty, Serializable } from 'typescript-json-serializer';

export enum CardType {
    Stratagem = 'Stratagem',
    PsychicPower = 'Psychic Power',
    TacticalObjective = 'Tactical Objective',
    Prayer = 'Prayer'
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

@Serializable()
export class Card {

    private static readonly defaultWidthPx = 400;
    private static readonly defaultHeightPx = 560;

    @JsonProperty() private _width: number = Card.defaultWidthPx;
    @JsonProperty() private _height: number = Card.defaultHeightPx;
    @JsonProperty() private _scale: number = 1;

    @JsonProperty() public _type: CardType = CardType.Stratagem;

    @JsonProperty() public _heading: string = "Stratagem";
    @JsonProperty() public _title: string = "<Title>";
    @JsonProperty() public _fluff: string = "<Fluff text>";
    @JsonProperty() public _rule: string = "<Rule text>"
    @JsonProperty() public _value: string = "1";

    private headerFont(): string {
        return Math.round(24*this._scale).toString() + 'px ' + 'Teko';
    }
    private titleFont(): string {
        return Math.round(28*this._scale).toString() + 'px ' + 'Teko';
    }
    private fluffFont(): string {
        return 'italic ' + Math.round(14*this._scale).toString() + 'px ' + 'serif';
    }
    private ruleFont(): string {
        return Math.round(14*this._scale).toString() + 'px ' + 'serif';
    }
    private footFont(): string {
        return Math.round(18*this._scale).toString() + 'px ' + 'Teko';
    }
    private valueFont(): string {
        return Math.round(24*this._scale).toString() + 'px ' + 'Teko';
    }

    public draw(canvas: HTMLCanvasElement, marginPx: number) {

        let ctx = canvas.getContext('2d');
        if (!ctx) return;

        this._width = canvas.width - 2 * marginPx;
        this._height = canvas.height - 2 * marginPx;
        this._scale = Math.max(this._width/Card.defaultWidthPx, this._height/Card.defaultHeightPx);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Apply margin - move the origin to the margin.
        ctx.translate(marginPx, marginPx);

        ctx.lineJoin = 'round';
        ctx.strokeStyle = 'silver';
        this.roundRect(ctx, 1, 1, this._width - 2, this._height - 2, 20, false, true);

        const borderX = this._width * 0.05;
        const borderY = borderX;
        const borderWidth = this._width - 2 * borderX;
        const borderHeight = this._height - 2 * borderY;
        const borderLineWidth = Math.ceil(borderX * 0.3);

        const textRegionHeight = this._height / 12;

        ctx.save();
        ctx.strokeStyle = 'grey';
        ctx.lineWidth = borderLineWidth;
        this.drawBorder(ctx, borderX, borderY, borderWidth, borderHeight, textRegionHeight);
        ctx.restore();

        const cardHeader = this._heading.toLocaleUpperCase();

        ctx.save();
        ctx.font = this.headerFont();
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
        ctx.font = this.titleFont();
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
            ctx.font = this.fluffFont();
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
        ctx.font = this.ruleFont();
        ctx.fillStyle = 'black';
        curY = RenderParagraph(ctx, this._rule, marginXLeft, curY, textWidth, Justification.Center);
        ctx.restore();

        curY = this._height - borderY * 1.5 - textRegionHeight;

        if ((this._type == CardType.Stratagem) || (this._type == CardType.PsychicPower) || (this._type == CardType.TacticalObjective)) {

            const cpBoxSize = textRegionHeight;
            
            ctx.save();
            ctx.lineWidth = Math.max(Math.ceil(this._scale), 1.0);
            this.roundRect(ctx, marginXLeft * 2 + cpBoxSize, curY, textWidth - 2 * marginXLeft - cpBoxSize, textRegionHeight - 6, 8, false, true);
            ctx.restore();
            
            ctx.save();
            ctx.font = this.footFont();
            ctx.textBaseline = 'top';
            ctx.fillStyle = 'black';
        
            let footText = 'COMMAND POINTS';
            if (this._type === CardType.Stratagem) {
               footText = 'COMMAND POINTS';
            }
            else if (this._type === CardType.PsychicPower) {
                footText = 'WARP CHARGE';
            }
            else if (this._type === CardType.TacticalObjective) {
                footText = 'OBJECTIVE';
            }
            RenderText(ctx, footText, marginXLeft * 2 + cpBoxSize, curY, textWidth - 2 * marginXLeft - cpBoxSize, textRegionHeight - 6, Justification.Center)
            ctx.restore();

            ctx.save();
            ctx.fillStyle = '#ba2222';
            ctx.lineWidth = Math.max(Math.ceil(this._scale), 1.0);
            this.bevelRect(ctx, marginXLeft * 2, curY - 3, cpBoxSize, cpBoxSize, 5, true, true);
            ctx.restore();

            ctx.save();
            ctx.font = this.valueFont();
            ctx.textBaseline = 'top';
            ctx.fillStyle = '#f5f2f2';
            RenderText(ctx, this._value, marginXLeft * 2, curY - 3, cpBoxSize, cpBoxSize, Justification.Center);
            ctx.restore();
        }
        else if (this._type == CardType.Prayer) {
            // Nothing to do for prayers.
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