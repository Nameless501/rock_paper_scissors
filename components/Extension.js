export class Extension {
    constructor() {
        this._extensionCheckbox = document.querySelector('.header__input');
        this._spockButton = document.querySelector('.controls__label_type_spock');
        this._lizardButton = document.querySelector('.controls__label_type_lizard');
    }

    setEventListeners = (allData, extendData) => {
        this._extensionCheckbox.addEventListener('input', () => {
            if(this._isChecked()) {
                this.toggleButtonsState(true);
                this._addExtendedData(allData, extendData);
            } else {
                this.toggleButtonsState(false);
                this._deleteExtendedData(allData, extendData);
            }
        })
    }

    _isChecked = () => {
        return this._extensionCheckbox.checked === true ? true : false;
    }

    _addExtendedData = (allData, extendData) => {
        extendData.forEach(item => allData.push(item));
    }

    _deleteExtendedData = (allData, extendData) => {
        extendData.forEach(extendElement => {
            let index = allData.findIndex((element) => element.name === extendElement.name);

            if (index > -1) {
                allData.splice(index, 1);
            }
        });
    }

    toggleButtonsState = (isEnable) => {
        if(isEnable) {
            this._spockButton.classList.remove('controls__label_disabled');
            this._lizardButton.classList.remove('controls__label_disabled');
        } else {
            this._spockButton.classList.add('controls__label_disabled');
            this._lizardButton.classList.add('controls__label_disabled');
        }
    }
}