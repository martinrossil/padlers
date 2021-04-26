import { Color, DisplayContainer, ShadowFilter } from 'enta';

export default class PadelScore extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'PadelScore';
        this.backgroundColor = new Color(43, 100, 72);
        this.left = this.right = 20;
        this.top = 104;
        this.height = 161;
        this.cornerSize = 10;
        this.addFilter(new ShadowFilter(0, 2, 4, new Color(213, 56, 16, 0.08)));
    }
}
customElements.define('padel-score', PadelScore);
