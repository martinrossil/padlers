import { Color, DisplayContainer } from 'enta';

export default class TournamentsScreen extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'TournamentsScreen';
        this.percentWidth = this.percentHeight = 100;
        this.backgroundColor = new Color(210, 100, 50);
        this.visible = false;
    }
}
customElements.define('tournaments-screen', TournamentsScreen);
