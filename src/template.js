import IconNonTeam from './non-icon-team.svg';

export default class TemplateHTML {
    
    getCompetitionOption(competition) {
        return `<option value="${competition.id}">${competition.name + " / " + competition.area.name}</option>`;
    }

    getTeam(index, team) {
        let urlLogoTeam = (team.crestUrl == '' || team.crestUrl === null) ? `src=${IconNonTeam}` : `src=${team.crestUrl}`;

        return `
        <tr>
            <th scope="col">${index}</th>
            <th scope="col"><img ${urlLogoTeam} class="logo-team">${team.name}</th>
            <th scope="col">${team.founded}</th>
            <th scope="col">${team.venue}</th>
        </tr>
        `;
    }

    getLoadingData() {
        return `
        <div class="d-flex justify-content-center">
            <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        `;
    }

    getRowTable(row) {
        let urlLogoTeam = (row.team.crestUrl == '' || row.team.crestUrl === null) ? `src=${IconNonTeam}` : `src=${row.team.crestUrl}`;

        return `
        <tr>
            <th scope="col">${row.position}</th>
            <th scope="col"><img ${urlLogoTeam} class="logo-team">${row.team.name}</th>
            <th scope="col">${row.playedGames}</th>
            <th scope="col">${row.won}</th>
            <th scope="col">${row.draw}</th>
            <th scope="col">${row.lost}</th>
            <th scope="col">${row.goalsFor}</th>
            <th scope="col">${row.goalsAgainst}</th>
            <th scope="col">${row.goalDifference}</th>
            <th scope="col">${row.points}</th>
        </tr>
        `; 
    }
}
