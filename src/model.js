export default class Model {
    constructor() {
        this.API_URL = 'https://api.football-data.org/v2/';
        this.API_TOKEN = '861722d3f47c4e1493f23bc94c9a634a';
    }

    getCompetitions() {
        const urlCompetitions = 'competitions?plan=TIER_ONE';

        return fetch(this.API_URL + urlCompetitions, {
            headers: { 'X-Auth-Token': this.API_TOKEN }
        })
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    getTeams(idCompetition) {
        const urlCompetitions = `competitions/${idCompetition}/teams`;

        return fetch(this.API_URL + urlCompetitions, {
            headers: { 'X-Auth-Token': this.API_TOKEN }
        })
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    getStanding(idCompetition) {
        const urlCompetitions = `competitions/${idCompetition}/standings?standingType=TOTAL`;

        return fetch(this.API_URL + urlCompetitions, {
            headers: { 'X-Auth-Token': this.API_TOKEN }
        })
            .then(response => response.json())
            .catch(error => console.error(error));
    }
}