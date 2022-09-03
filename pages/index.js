// Imports

import { Validation } from '../components/Validation.js';

import { config, scoreData, form, userBetIcon, opponentBetIcon, roundCounter, userScore, opponentScore, radioButtonsList, resultPopup, resultText } from '../utils/constants.js';

import { getBetData, getRandomData } from '../utils/utils.js';

// Class instances

const validation = new Validation(form);

validation.enableValidation();




// Functions

const setBetData = (data, side) => {
    side.classList.add('arena__bet-icon_active');
    side.src = data.img;
    side.alt = data.name;
}

const getCheckedRadioData = () => {
    const checkedRadioButton = document.querySelector('input[name="radio"]:checked');
    return checkedRadioButton.value;
}

const updateScoreData = (data, winner = false) => {
    data['round'] = data['round'] + 1;

    if(winner) {
        data[winner] = data[winner] + 1;
    }
}

const setScoreData = (data) => {
    roundCounter.textContent = data.round;
    userScore.textContent = data.user;
    opponentScore.textContent = data.opponent;
}

const clearArena = () => {
    userBetIcon.classList.remove('arena__bet-icon_active');
    opponentBetIcon.classList.remove('arena__bet-icon_active');
}

const showResult = (result) => {
    resultPopup.classList.add('result-popup_active');
    resultText.textContent = result;
}

const hideResult = () => {
    resultPopup.classList.remove('result-popup_active');
    resultText.textContent = '';
}

const getResult = (userBetData, opponentBetData) => {
    if(userBetData.name === opponentBetData.name) {
        updateScoreData(scoreData);
        showResult('Draw');
    } else if(userBetData.beat === opponentBetData.name) {
        updateScoreData(scoreData, 'user');
        showResult('You win');
    } else if(userBetData.name === opponentBetData.beat) {
        updateScoreData(scoreData, 'opponent');
        showResult('You lose');
    }
}

// EventListeners

radioButtonsList.forEach((button) => {
    button.addEventListener('click', (evt) => {        
        setBetData(getBetData(config, getCheckedRadioData()), userBetIcon);
    });
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let opponentRandomBet = getRandomData(config);

    setBetData(opponentRandomBet, opponentBetIcon);

    getResult(getBetData(config, getCheckedRadioData()), opponentRandomBet);

    setScoreData(scoreData);

    form.reset();

    setTimeout(
        () => {
            validation.clearValidation();
            clearArena();
            hideResult();
        },
        1500
    )
})