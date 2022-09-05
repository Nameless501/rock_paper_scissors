export class PopupWithResult {
    constructor() {
        this._popup = document.querySelector('.result-popup');
        this.resultText = this._popup.querySelector('.result-popup__text')
    }

    showResult = (resultText) => {
        this._popup.classList.add('result-popup_active');
        this.resultText.textContent = resultText;
    }

    hideResult = () => {
        this._popup.classList.remove('result-popup_active');
        this.resultText.textContent = '';
    }
}