import jsPDF from 'jspdf'
import { Card, CardType } from "./card";

let myCard: Card | null = null;
let myCardPdf: jsPDF | null = null;

function updatePreview() {
    let canvas = document.getElementById('preview') as HTMLCanvasElement;
    if (canvas) {
        let ctx = canvas.getContext('2d');
        if (ctx && myCard) {
            myCard.draw(ctx);
        }
    }
}

function onCardTypeChanged(event: Event) {
    const selectElem = event.target as HTMLSelectElement;
    if (selectElem && myCard) {
        myCard._heading = selectElem.selectedOptions[0].text;

        // TODO: update the text in the Header input to match.

        if (selectElem.selectedOptions[0].text == 'Stratagem') {
            myCard._type = CardType.Stratagem;
        }
        else if (selectElem.selectedOptions[0].text == 'Psychic Power') {
            myCard._type = CardType.PsychicPower;
        }
        else if (selectElem.selectedOptions[0].text == 'Tactical Objective') {
            myCard._type = CardType.TacticalObjective;
        }
    
        updatePreview();
    }
}

function onCardStyleChanged(event: Event) {
    const selectElem = event.target as HTMLSelectElement;
    if (selectElem && myCard) {
        // TODO: implement style
    }
}

function onCardSizeChanged(event: Event) {
    const selectElem = event.target as HTMLSelectElement;
    if (selectElem && myCard) {
        // TODO: implement size
    }
}

function onHeaderChanged(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    if (inputElem && myCard) {
        myCard._heading = inputElem.value;
        updatePreview();
    }
}

function onTitleChanged(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    if (inputElem && myCard) {
        myCard._title = inputElem.value;
        updatePreview();
    }
}

function onRuleChanged(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    if (inputElem && myCard) {
        myCard._rule = inputElem.value;
        updatePreview();
    }
}

function onFluffChanged(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    if (inputElem && myCard) {
        myCard._fluff = inputElem.value;
        updatePreview();
    }
}

function onCPChanged(event: Event) {
    const inputElem = event.target as HTMLInputElement;
    if (inputElem && myCard) {
        myCard._value = inputElem.value;
        updatePreview();
    }
}

function handleSubmit() {
    if (myCardPdf && myCard) {
        myCard.render(myCardPdf);
        myCardPdf.save('stratagem.pdf');
    }
}

function plumbCallbacks() {

    const cardTypeSelect = document.getElementById('cardtype');
    if (cardTypeSelect) cardTypeSelect.addEventListener('change', onCardTypeChanged);
    const cardStyleSelect = document.getElementById('cardstyle');
    if (cardStyleSelect) cardStyleSelect.addEventListener('change', onCardStyleChanged);
    const cardSizeSelect = document.getElementById('cardsize');
    if (cardSizeSelect) cardSizeSelect.addEventListener('change', onCardSizeChanged);

    const cardHeaderInput = document.getElementById('cardheader');
    if (cardHeaderInput) cardHeaderInput.addEventListener('input', onHeaderChanged);
    const cardTitleInput = document.getElementById('cardtitle');
    if (cardTitleInput) cardTitleInput.addEventListener('input', onTitleChanged);
    const cardRuleInput = document.getElementById('cardrule');
    if (cardRuleInput) cardRuleInput.addEventListener('input', onRuleChanged);
    const cardFluffInput = document.getElementById('cardfluff');
    if (cardFluffInput) cardFluffInput.addEventListener('input', onFluffChanged);

    const cardCPInput = document.getElementById('commandpoints');
    if (cardCPInput) cardCPInput.addEventListener('input', onCPChanged);

    const createCard = document.getElementById('createcard');
    if (createCard) createCard.addEventListener('submit', handleSubmit);
}

let canvas = document.getElementById('preview') as HTMLCanvasElement;
if (canvas) {
    let ctx = canvas.getContext('2d');
    if (ctx) {
        myCard = new Card(canvas.width, canvas.height);
    }
}

myCardPdf = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: [630, 880]
});

plumbCallbacks();

updatePreview();

