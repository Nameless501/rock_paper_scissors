export const config = [
    {
        name: 'rock',
        img: './images/rock.jpg',
        beat: ['scissors', 'lizard']
    },
    {
        name: 'paper',
        img: './images/paper.jpg',
        beat: ['rock', 'spock']
    },
    {
        name: 'scissors',
        img: './images/scissors.jpg',
        beat: ['paper', 'lizard']
    }
];

export const extend = [
    {
        name: 'lizard',
        img: './images/lizard.jpg',
        beat: ['spock', 'paper']
    },
    {
        name: 'spock',
        img: './images/spock.jpg',
        beat: ['scissors', 'rock']
    }
]

export const controlsForm = document.querySelector('.controls__form');