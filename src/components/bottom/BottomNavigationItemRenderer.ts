import { Color, ItemRenderer } from 'enta';
import IBottomNavigationItem from './IBottomNavigationItem';

export default class BottomNavigationRenderer extends ItemRenderer<IBottomNavigationItem> {
    public constructor() {
        super();
        this.name = 'BottomNavigationRenderer';
        this.height = 65;
        this.backgroundColor = new Color();
    }
}
customElements.define('bottom-navigation-item-renderer', BottomNavigationRenderer);
