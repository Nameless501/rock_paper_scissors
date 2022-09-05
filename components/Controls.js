export class Controls {
    constructor(config, controlsForm, handleIconData, submitHandler) {
        this._data = config;
        this._form = controlsForm;
        this._handleIconData = handleIconData;
        this._submitHandler = submitHandler;
        this._radioButtonsList = Array.from(this._form.querySelectorAll('.controls__radio'));
        this._userBetIcon = document.querySelector('.arena__bet-icon_type_user');
        this._opponentBetIcon = document.querySelector('.arena__bet-icon_type_opponent');
    }

    setEventListeners = () => {
        this._radioButtonsList.forEach((button) => {
            button.addEventListener('click', () => {
                this._handleIconData(this._getBetData(), this._userBetIcon);
            });
        })

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this._submitHandler(this._getBetData());

            this._form.reset();
        })
    }

    _getCheckedRadioData = () => {
        this._checkedRadioButton = this._form.querySelector('input[name="radio"]:checked');
        return this._checkedRadioButton.value;
    }

    _getBetData = () => {
        return this._data.find(item => item.name === this._getCheckedRadioData() ? true : false);
    }

    cleanBetIcons = () => {
        this._userBetIcon.style.display = 'none';
        this._opponentBetIcon.style.display = 'none';
    }
}