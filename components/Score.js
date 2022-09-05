export class Score {
    constructor() {
        this._roundCount = 1;
        this._userScore = 0;
        this._opponentScore = 0;
        this._roundCounter = document.querySelector('.arena__round-counter');
        this._userScoreCounter = document.querySelector('.arena__score-counter_type_user');
        this._opponentScoreCounter = document.querySelector('.arena__score-counter_type_opponent');
    }

    setScoreData = (result) => {
        this._updateScoreData(result);

        this._roundCounter.textContent = this._roundCount;
        this._userScoreCounter.textContent = this._userScore;
        this._opponentScoreCounter.textContent = this._opponentScore;
    }

    _updateScoreData = (result) => {
        this._roundCount += 1;
    
        switch(result) {
            case 'Draw': 
                break;
            case 'You win!': 
                this._userScore += 1;
                break;
            case 'You lose':
                this._opponentScore += 1;
                break;
        }
    }
}