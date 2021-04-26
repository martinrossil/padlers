import { Color, DisplayContainer } from 'enta';

export default class TopBar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'TopBar';
        this.backgroundColor = new Color(214, 78, 54);
        this.percentWidth = 100;
        this.height = 150;
        this.cornerSizeBottomLeft = this.cornerSizeBottomRight = 20;
    }
}
customElements.define('top-bar', TopBar);
