export const config = [
    {
        name: 'rock',
        img: './images/rock.png',
        beat: 'scissors'
    },
    {
        name: 'paper',
        img: './images/paper.png',
        beat: 'rock'
    },
    {
        name: 'scissors',
        img: './images/scissors.png',
        beat: 'paper'
    }
];

export const scoreData = {
    'round': 1,
    'user': 0,
    'opponent': 0
};

export const form = document.querySelector('.controls__form');

export const userBet = document.querySelector('.arena__bet_type_user');

export const userBetIcon = userBet.querySelector('.arena__bet-icon');

export const opponentBet = document.querySelector('.arena__bet_type_opponent');

export const opponentBetIcon = opponentBet.querySelector('.arena__bet-icon');

export const roundCounter = document.querySelector('.arena__round-counter');

export const userScore = document.querySelector('.arena__score-counter_type_user');

export const opponentScore = document.querySelector('.arena__score-counter_type_opponent');

export const radioButtonsList = Array.from(document.querySelectorAll('.controls__radio'));

export const resultPopup = document.querySelector('.result-popup');

export const resultText = document.querySelector('.result-popup__text');