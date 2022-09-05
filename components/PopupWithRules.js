import { Popup } from "./Popup.js";

export class PopupWithRules extends Popup {
    constructor(popup) {
        super(popup);
        this._bindedHandleEscape = this._handleEscape.bind(this);
    }

    setEventListeners = () => {
        this._closeButton = this._popup.querySelector('.popup__close');

        this._closeButton.addEventListener('click', () => this._closePopup());

        //document.addEventListener('keydown', this._bindedHandleEscape)
    }

    _handleEscape(evt) {
        if(evt.key === 'Escape') {
            this._closePopup();
        }
    }

    _closePopup() {
        
    }
}