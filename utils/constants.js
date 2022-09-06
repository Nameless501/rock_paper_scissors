export const config = [
    {
        name: 'rock',
        img: './images/rock-side.png',
        beat: ['scissors', 'lizard']
    },
    {
        name: 'paper',
        img: './images/paper-side.png',
        beat: ['rock', 'spock']
    },
    {
        name: 'scissors',
        img: './images/scissors-side.png',
        beat: ['paper', 'lizard']
    }
];

export const extend = [
    {
        name: 'lizard',
        img: './images/lizard-side.png',
        beat: ['spock', 'paper']
    },
    {
        name: 'spock',
        img: './images/spock-side.png',
        beat: ['scissors', 'rock']
    }
]

export const controlsForm = document.querySelector('.controls__form');

export const resultPopup = document.querySelector('.popup_type_result');

export const rulesPopup = document.querySelector('.popup_type_rules');

export const rulesButton = document.querySelector('.header__button');