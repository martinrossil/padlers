import { Color, DisplayContainer } from 'enta';

export default class SocialScreen extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'SocialScreen';
        this.percentWidth = this.percentHeight = 100;
        this.backgroundColor = new Color(90, 100, 50);
        this.visible = false;
    }
}
customElements.define('social-screen', SocialScreen);
