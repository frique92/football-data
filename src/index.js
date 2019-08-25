import Controller from "./controller";

import './style.css';

const controller = new Controller('#app');
const competitionElement = document.querySelector('#competitions');
const standingElement = document.querySelector('#standing');
const teamsElement = document.querySelector('#teams');

window.addEventListener('DOMContentLoader', controller.renderCompetitionList(competitionElement));

teamsElement.addEventListener('click', (e) => {
    clearActiveClassSetToCurrent(e.target);

    let idCompetition = parseInt(competitionElement.value, 10);
    if (isNaN(idCompetition)) {
        controller.clearApp();
    } else {
        controller.renderTeams(idCompetition);
    };
})

standingElement.addEventListener('click', (e) => {
    clearActiveClassSetToCurrent(e.target);

    let idCompetition = parseInt(competitionElement.value, 10);
    if (isNaN(idCompetition)) {
        controller.clearApp();
    } else {
        controller.renderStanding(idCompetition);
    };
})

function clearActiveClassSetToCurrent(currentElement) {
    let listElements = document.querySelectorAll('.settings__btn');
    listElements.forEach((currentValue, currentIndex, listObj) => {
        currentValue.classList.remove('active');
        currentValue.removeAttribute('aria-pressed');
    });

    currentElement.classList.add('active');
    currentElement.setAttribute('aria-pressed', true);
}