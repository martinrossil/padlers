import { Color, DisplayContainer } from 'enta';

export default class RankScreen extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'RankScreen';
        this.percentWidth = this.percentHeight = 100;
        this.backgroundColor = new Color(270, 100, 50);
        this.visible = false;
    }
}
customElements.define('rank-screen', RankScreen);
