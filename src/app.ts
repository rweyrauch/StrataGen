/*
    Copyright 2020-2022 Rick Weyrauch,

    Permission to use, copy, modify, and/or distribute this software for any purpose 
    with or without fee is hereby granted, provided that the above copyright notice
    and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH 
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND 
    FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, 
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS 
    OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER 
    TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE 
    OF THIS SOFTWARE.
*/

import { Card, CardStyle, CardType } from "./card";
import { serialize, deserialize } from "typescript-json-serializer";
import { parse } from 'papaparse';

let activeCards: Card[] = [];
let currentCard = 0;

function updatePreview() {
    let canvas = document.getElementById('preview') as HTMLCanvasElement;
    if (canvas && activeCards[currentCard]) {
        activeCards[currentCard].draw(canvas, 0);
    }
}

function onCardTypeChanged(event: Event) {
    const selectElem = event.target as HTMLSelectElement;
    if (selectElem && activeCards[currentCard]) {
        activeCards[currentCard]._heading = selectElem.selectedOptions[0].text;

        // Update the text in the Header input to match.
        $('#cardheader').val(activeCards[currentCard]._heading);

        if (selectElem.selectedOptions[0].text == 'Stratagem') {
            activeCards[currentCard]._type = CardType.Stratagem;
        }
        else if (selectElem.selectedOptions[0].text == 'Psychic Power') {
            activeCards[currentCard]._type = CardType.PsychicPower;
        }
        else if (selectElem.selectedOptions[0].text == 'Tactical Objective') {
            activeCards[currentCard]._type = CardType.TacticalObjective;
        }
        else if (selectElem.selectedOptions[0].text == 'Prayer') {
            activeCards[currentCard]._type = CardType.Prayer;
        }

        updateCardUI();
        updatePreview();
    }
}

function onCardStyleChanged(event: Event) {
    const selectElem = event.target as HTMLSelectElement;
    if (selectElem && activeCards[currentCard]) {
        if (selectElem.selectedOptions[0].text == 'Classic') {
            activeCards[currentCard]._style = CardStyle.Classic;
        }
        else if (selectElem.selectedOptions[0].text == '9th Edition') {
            activeCards[currentCard]._style = CardStyle.Edition_9th;
        }
        updateCardUI();
        updatePreview();
    }
}

function onHeaderChanged(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    if (inputElem && activeCards[currentCard]) {
        activeCards[currentCard]._heading = inputElem.value;
        updatePreview();
    }
}

function onTitleChanged(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    if (inputElem && activeCards[currentCard]) {
        activeCards[currentCard]._title = inputElem.value;
        updatePreview();
    }
}

function onRuleChanged(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    if (inputElem && activeCards[currentCard]) {
        activeCards[currentCard]._rule = inputElem.value;
        updatePreview();
    }
}

function onFluffChanged(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    if (inputElem && activeCards[currentCard]) {
        activeCards[currentCard]._fluff = inputElem.value;
        updatePreview();
    }
}

function onValueChanged(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    if (inputElem && activeCards[currentCard]) {
        activeCards[currentCard]._value = inputElem.value;
        updatePreview();
    }
}

function onFooterChanged(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    if (inputElem && activeCards[currentCard]) {
        activeCards[currentCard]._footer = inputElem.value;
        updatePreview();
    }
}

function onPreviousCard() {
    currentCard = Math.max(currentCard - 1, 0);
    updateCardUI();
    updatePreview();
}

function onNextCard() {
    currentCard = Math.min(currentCard + 1, activeCards.length - 1);
    updateCardUI();
    updatePreview();
}

function mmToInches(mm: number): number {
    return mm / 25.4;
}

function handleCreate() {
    if (activeCards[currentCard]) {
        const cardSizeMm = [63, 88];

        let dpi = 300;
        let marginMm = 0;
        const outputDPIInput = document.getElementById('outputdpi') as HTMLInputElement;
        if (outputDPIInput) dpi = parseInt(outputDPIInput.value);
        const outputMargin = document.getElementById('outputmargin') as HTMLInputElement;
        if (outputMargin) marginMm = parseInt(outputMargin.value);
        // Round margin up to that is always at least the requested size.
        let marginPx = Math.ceil(mmToInches(marginMm) * dpi);

        let canvas = document.createElement('canvas') as HTMLCanvasElement;
        canvas.width = Math.round(mmToInches(cardSizeMm[0]) * dpi) + 2 * marginPx;
        canvas.height = Math.round(mmToInches(cardSizeMm[1]) * dpi) + 2 * marginPx;

        activeCards[currentCard].draw(canvas, marginPx);

        let link = document.createElement('a');
        link.download = 'stratagem.png';
        link.href = canvas.toDataURL("image/png");
        link.click();

        console.log("Current card: " + currentCard + " Num active cards: " + activeCards.length);
        // Refresh the previewed card.
        updateCardUI();
        updatePreview();
    }
}

function getFileExtension(filename: string): string {
    const substrings = filename.split('.');
    if (substrings.length > 1) {
        return substrings[substrings.length - 1].toLowerCase();
    }
    return "";
}

function textToStyle(styleText: string): CardStyle {
    if (styleText == 'CLASSIC') return CardStyle.Classic;
    return CardStyle.Edition_9th;
}

function handleFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;

    let defaultStyle = CardStyle.Edition_9th;

    if (files) {
        currentCard = 0;
        activeCards.length = 0;

        // files is a FileList of File objects. List some properties.
        for (let f of files) {
            const fileExt = getFileExtension(f.name);
            if (fileExt === "csv" || fileExt === 'tsv') {
                let config: any;
                parse(f, {complete: (result) => {
                    for (let data of result.data) {
                        let fields = data as Array<string>;
                        let cardType = CardType.Stratagem;
                        if (fields[0].toUpperCase() == "STRATAGEM") cardType = CardType.Stratagem;
                        else if (fields[0].toUpperCase() === "PSYCHIC POWER") cardType = CardType.PsychicPower;
                        else if (fields[0].toUpperCase() === "TACTICAL OBJECTIVE") cardType = CardType.TacticalObjective;
                        else if (fields[0].toUpperCase() === "PRAYER") cardType = CardType.Prayer;
                        else {
                            continue;
                        }
                        if (cardType == CardType.Prayer) {
                            let i = 1;
                            let card = new Card();
                            card._type = cardType;
                            card._value = "";
                            if (fields.length == 5) {
                                card._style = defaultStyle;
                            }
                            else if (fields.length == 6) {
                                card._style = textToStyle(fields[i++]);
                            }
                            card._title = fields[i++];
                            card._heading = fields[i++];
                            card._fluff = fields[i++];
                            card._rule = fields[i++];
                            activeCards.push(card);
                        }
                        else if (cardType == CardType.TacticalObjective) {
                            let i = 1;
                            let card = new Card();
                            card._type = cardType;
                            if (fields.length == 5) {
                                card._style = defaultStyle;
                            } 
                            else if (fields.length >= 6) {
                                card._style = textToStyle(fields[i++]);                                
                            }
                            card._title = fields[i++];
                            card._heading = fields[i++];
                            card._fluff = fields[i++];
                            card._rule = fields[i++];
                            if (fields.length == 7) {
                                card._footer = fields[i++];
                            }
                            else {
                                card._footer = "OBJECTIVE";
                            }
                            activeCards.push(card);
                        }
                        else {
                            let i = 1;
                            let card = new Card();
                            card._type = cardType;
                            if (fields.length == 6) {
                                card._style = defaultStyle;
                            }
                            else if (fields.length == 7) {
                                card._style = textToStyle(fields[i++]);                                
                            }    
                            card._value = fields[i++];
                            card._title = fields[i++];
                            card._heading = fields[i++];
                            card._fluff = fields[i++];
                            card._rule = fields[i++];
                            activeCards.push(card);
                        }
                    }
                    currentCard = 0;
                    console.log("Num active cards: " + activeCards.length);
                    updateCardUI();
                    updatePreview();
                }});
            }
            else {
                $('#errorText').html('StrataGen only supports .csv files.  Selected file is a \'' + fileExt + "\' file.");
                $('#errorDialog').modal();
            }
        }
    }
}

function onSaveCard() {
    localStorage.setItem('lastCard', JSON.stringify(serialize(activeCards[currentCard])));
}

function onLoadCard() {
    let lastCardString = localStorage.getItem('lastCard');
    if (lastCardString) {
        activeCards[currentCard] = deserialize<Card>(JSON.parse(lastCardString), Card);
        updateCardUI();
        updatePreview();
    }
    else {
        console.log("Card not loaded.");
    }
}

function onBackgroundLoad(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;

    if (files && files[0]) {
        //Jimp.read(files[0].name);
    }
}

function onBgOpacityChanged(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    if (inputElem) {
        inputElem.value;
    }
}

function onBgSaturationChanged(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    if (inputElem) {
        inputElem.value;
    }
}

function updateCardUI() {
    if (activeCards[currentCard]) {
        $('#cardtype').val(activeCards[currentCard]._type.toString());
        $('#cardstyle').val(activeCards[currentCard]._style.toString());
        $('#cardheader').val(activeCards[currentCard]._heading);
        $('#cardtitle').val(activeCards[currentCard]._title);
        $('#cardrule').val(activeCards[currentCard]._rule);
        $('#cardfluff').val(activeCards[currentCard]._fluff);
        $('#cardfooter').val(activeCards[currentCard]._footer);

        $('#cardfootercontrol').hide();

        if (activeCards[currentCard]._type === CardType.Stratagem) {
            $('#cardvalue').attr({"min": 1, "max": 3});
            if (parseInt(activeCards[currentCard]._value) > 3) activeCards[currentCard]._value = "3";
            else if (parseInt(activeCards[currentCard]._value) < 1) activeCards[currentCard]._value = "1";

            $('#cardvaluelabel').html("Command Points");
            $('#cardvaluecontrol').show();
        }
        else if (activeCards[currentCard]._type === CardType.PsychicPower) {
            $('#cardvalue').attr({"min": 2, "max": 12});
            if (parseInt(activeCards[currentCard]._value) > 12) activeCards[currentCard]._value = "12";
            else if (parseInt(activeCards[currentCard]._value) < 2) activeCards[currentCard]._value = "2";

            $('#cardvaluelabel').html("Warp Charge");
            $('#cardvaluecontrol').show();
        }
        else if (activeCards[currentCard]._type === CardType.TacticalObjective) {
            if (activeCards[currentCard]._style == CardStyle.Classic) {
                $('#cardvalue').attr({"min": 11, "max": 66});
                if (parseInt(activeCards[currentCard]._value) > 66) activeCards[currentCard]._value = "66";
                else if (parseInt(activeCards[currentCard]._value) < 11) activeCards[currentCard]._value = "11";
                
                $('#cardvaluelabel').html("Objective (D66)");
                $('#cardvaluecontrol').show();
            }
            else if (activeCards[currentCard]._style == CardStyle.Edition_9th) {
                $('#cardvaluecontrol').hide();
                $('#cardfootercontrol').show();
            }
        }
        else if (activeCards[currentCard]._type === CardType.Prayer) {
            $('#cardvaluecontrol').hide();
        }

        $('#cardvalue').val(activeCards[currentCard]._value);
    }
}

function plumbCallbacks() {

    $('#previouscard').click(onPreviousCard);
    $('#nextcard').click(onNextCard);

    $('#cardtype').on('change', onCardTypeChanged);
    $('#cardstyle').on('change', onCardStyleChanged);
    $('#cardheader').on('input', onHeaderChanged);
    $('#cardtitle').on('input', onTitleChanged);
    $('#cardrule').on('input', onRuleChanged);
    $('#cardfluff').on('input', onFluffChanged);
    $('#cardvalue').on('input', onValueChanged);
    $('#cardfooter').on('input', onFooterChanged);

    $('#createcard').click(handleCreate);
    $('#datacardfile').on('change', handleFileSelect);

    $('#backgroundfile').on('change', onBackgroundLoad);
    $('#bgopacity').on('input', onBgOpacityChanged);
    $('#bgsaturation').on('input', onBgSaturationChanged);

    $('#savecard').click(onSaveCard);
    $('#loadcard').click(onLoadCard);
}

console.log("Reloading web page.");

let canvas = document.getElementById('preview') as HTMLCanvasElement;
if (canvas) {
    let ctx = canvas.getContext('2d');
    if (ctx) {
        if (activeCards.length == 0) {
            currentCard = 0;
            activeCards[currentCard] = new Card();
        }
    }
}

plumbCallbacks();

updateCardUI();
updatePreview();

console.log("Started...");
