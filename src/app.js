export default class App {
    constructor(idApp) {
        this.appElement = document.querySelector(idApp);
        this.model = new Model();
        this.view = new View();

        window.onload = this.init();
    }

    init() {
        let that = this;
        // this.model.requestAPI('competitions/BL1/teams?season=2018')
        // this.model.requestAPI('competitions?plan=TIER_TWO')
        

        
    }
}



