import Model from "./model";
import View from "./view";

export default class Controller {
    constructor(selector) {
        this.appElement = document.querySelector(selector);
        this.model = new Model();
        this.view = new View();
    }

    renderCompetitionList(competitionElement) {
        this.model.getCompetitions()
            .then(result => {
                competitionElement.innerHTML = this.view.renderCompetitionOption(result.competitions);
            })
    }

    renderTeams(idCompetition) {
        this.appElement.innerHTML = this.view.renderLoadingData();
        this.model.getTeams(idCompetition)
            .then(result => {
                this.appElement.innerHTML = this.view.renderTeams(result.teams);
            })
    }

    renderStanding(idCompetition) {
        this.appElement.innerHTML = this.view.renderLoadingData();
        this.model.getStanding(idCompetition)
            .then(result => {
                if (result.standings.length) {
                    this.appElement.innerHTML = this.view.renderStanding(result.standings[0].table);
                } else this.clearApp();
            })
    }

    clearApp() {
        this.appElement.innerHTML = '';
    }

}