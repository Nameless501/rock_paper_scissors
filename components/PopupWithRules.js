import { Popup } from "./Popup.js";

export class PopupWithRules extends Popup {
    constructor(popup) {
        super(popup);
        this._handleEscapeClose = this._handleEscapeClose.bind(this);
    }

    setEventListeners = () => {
        this._popup.addEventListener('click', (evt) => this._handleClose(evt))

        window.addEventListener('keydown', this._handleEscapeClose);
    }

    _handleEscapeClose(evt) {
        if(evt.key === 'Escape') {
            this._closePopup();
        }
    }

    _handleClose(evt) {
        if (evt.target.classList.contains('popup_active') || evt.target.classList.contains('popup__close')) {
            this._closePopup();
        }
    }

    _closePopup() {
        super._closePopup();
        
        document.removeEventListener('keydown', this._handleEscClose);
    }
}