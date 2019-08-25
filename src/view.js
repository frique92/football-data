import TemplateHTML from "./template";

export default class View {
    constructor() {
        this.templateHTML = new TemplateHTML();
    }

    renderCompetitionOption(listCompetitions) {
        const optionHTML = listCompetitions.reduce((html, competition) => html + this.templateHTML.getCompetitionOption(competition), '');

        return `<option value = "">Choose competition...</option>
            ${optionHTML}`;
    }

    renderTeams(teams) {
        let counter = 1;
        const teamHTML = teams.reduce((html, team) => {
            let result = html + this.templateHTML.getTeam(counter, team);
            counter++;
            return result;
        }, '');

        return `<table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Founded</th>
                            <th scope="col">Stadium</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${teamHTML}
                    </tbody>
                </table>`;
    }

    renderStanding(table) {
        const teamHTML = table.reduce((html, row) => html + this.templateHTML.getRowTable(row), '');

        return `<table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Team</th>
                            <th scope="col">Pld</th>
                            <th scope="col">W</th>
                            <th scope="col">D</th>
                            <th scope="col">L</th>
                            <th scope="col">GF</th>
                            <th scope="col">GA</th>
                            <th scope="col">GD</th>
                            <th scope="col">Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${teamHTML}
                    </tbody>
                </table>`;
    }

    renderLoadingData() {
        return this.templateHTML.getLoadingData();
    }
}