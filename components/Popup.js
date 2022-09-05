export class Popup {
    constructor(popup) {
        this._popup = popup;
    }

    openPopup = () => {
        this._popup.classList.add('popup_active');
    }

    _closePopup = () => {
        this._popup.classList.remove('popup_active');
    }
}