import { Color, DisplayContainer } from 'enta';

export default class MatchesScreen extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'MatchesScreen';
        this.percentWidth = this.percentHeight = 100;
        this.backgroundColor = new Color(180, 100, 50);
        this.visible = false;
    }
}
customElements.define('matches-screen', MatchesScreen);
