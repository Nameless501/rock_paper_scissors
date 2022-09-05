export class Result {
    constructor(config, handleBetIcon) {
        this._data = config;
        this._handleBetIcon = handleBetIcon;
        this._opponentBetIcon = document.querySelector('.arena__bet-icon_type_opponent');
    }

    _getRandomData = () => {
        return this._data[Math.floor(Math.random() * this._data.length)]
    }

    _getResult = (userBet, opponentBet) => {
        this._result = '';

        if(userBet.name === opponentBet.name) {
            this._result = 'Draw';
        } else if(userBet.beat === opponentBet.name) {
            this._result = 'You win!';
        } else if(userBet.name === opponentBet.beat) {
            this._result = 'You lose';
        }

        return this._result;
    }

    setResult = (userBet) => {
        const randomData = this._getRandomData();

        this._handleBetIcon(randomData, this._opponentBetIcon);

        return this._getResult(userBet, randomData);
    }
}