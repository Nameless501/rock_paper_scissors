import { Popup } from "./Popup.js";

export class PopupWithResult extends Popup {
    constructor(popup) {
        super(popup);
        this.resultText = this._popup.querySelector('.popup__text')
    }

    showResult = (resultText) => {
        this.openPopup();
        this.resultText.textContent = resultText;
    }

    hideResult = () => {
        this._closePopup();
        this.resultText.textContent = '';
    }
}