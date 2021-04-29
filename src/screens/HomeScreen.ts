import { Color, DisplayContainer } from 'enta';

export default class HomeScreen extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'HomeScreen';
        this.percentWidth = this.percentHeight = 100;
        this.backgroundColor = new Color(0, 100, 50);
        this.visible = false;
    }
}
customElements.define('home-screen', HomeScreen);
