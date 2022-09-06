// Imports

import { Controls } from '../components/Controls.js';

import { Extension } from '../components/Extension.js';

import { PopupWithResult } from '../components/PopupWithResult.js';

import { PopupWithRules } from '../components/PopupWithRules.js';

import { Result } from '../components/Result.js';

import { Score } from '../components/Score.js';

import { Validation } from '../components/Validation.js';

import { config, extend, controlsForm, resultPopup, rulesPopup, rulesButton } from '../utils/constants.js';

import { handleIconData } from '../utils/utils.js';

// Class instances

const validation = new Validation(controlsForm);

const score = new Score();

const result = new Result(config, handleIconData);

const popupWithResult = new PopupWithResult(resultPopup);

const controls = new Controls(
    config,
    controlsForm,
    handleIconData,
    (userBet) => {
        let currentResult = result.setResult(userBet);

        popupWithResult.showResult(currentResult);
        score.setScoreData(currentResult);
        
        setTimeout(
            () => {
                validation.clearValidation();
                controls.cleanBetIcons();
                popupWithResult.hideResult();
            },
            1500
        )
    }
)

const extension = new Extension();

extension.toggleButtonsState(false);

const popupWithRules = new PopupWithRules(rulesPopup);

// EventListeners

extension.setEventListeners(config, extend)

controls.setEventListeners();

validation.enableValidation();

popupWithRules.setEventListeners();

rulesButton.addEventListener('click', () => {popupWithRules.openPopup()});