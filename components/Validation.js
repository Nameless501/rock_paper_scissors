export class Validation {
    constructor(currentForm) {
        this._form = currentForm;
        this._radioButtonsList = Array.from(this._form.querySelectorAll('.controls__radio'));
        this._submitButton = this._form.querySelector('.controls__submit')
    }

    enableValidation = () => {
        this._disableSubmitButton();

        this._radioButtonsList.forEach(input => {
            input.addEventListener('input', () => this._checkValidity(input));
        })
    }

    _checkValidity = (input) => {
        input.validity.valid ? this._activateSubmitButton() : this._disableSubmitButton();
    }

    _disableSubmitButton = () => {
        this._submitButton.setAttribute('disabled', true);
    }

    _activateSubmitButton = () => {
        this._submitButton.removeAttribute('disabled');
    }

    clearValidation = () => {
        this._disableSubmitButton();
    }
}