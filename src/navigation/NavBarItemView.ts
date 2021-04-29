import { Color, ILabelElement, IPathElement, ItemRenderer, LabelElement, PathElement, TypeFace } from 'enta';
import { Cursor } from 'enta/dist/enums/Cursor';
import INavBarItem from './INavBarItem';

export default class NavBarItemView extends ItemRenderer<INavBarItem> {
    public constructor() {
        super();
        this.name = 'BottomNavigationRenderer';
        this.height = 65;
        this.cursor = Cursor.POINTER;
        this.addElements([this.pathElement, this.labelElement]);
    }

    protected dataChanged(): void {
        if (this.data) {
            this.pathElement.pathData = this.data.icon;
            this.labelElement.text = this.data.text;
        }
    }

    public initial(): void {
        if (!this.selected) {
            this.pathElement.strokeColor = new Color(216, 32, 69);
            this.labelElement.textColor = new Color(216, 32, 69);
        } else {
            this.pathElement.strokeColor = new Color(214, 78, 54);
            this.labelElement.textColor = new Color(214, 78, 54);
        }
    }

    protected selectedChanged(): void {
        if (this.selected) {
            this.pathElement.strokeColor = new Color(214, 78, 54);
            this.labelElement.textColor = new Color(214, 78, 54);
        } else {
            this.pathElement.strokeColor = new Color(216, 32, 69);
            this.labelElement.textColor = new Color(216, 32, 69);
        }
    }

    private _pathElement!: IPathElement;

    private get pathElement(): IPathElement {
        if (!this._pathElement) {
            this._pathElement = new PathElement();
            this._pathElement.size(24, 24);
            this._pathElement.strokeColor = new Color(216, 32, 69);
            this._pathElement.strokeWidth = 2;
            this._pathElement.strokeLineCap = 'round';
            this._pathElement.strokeLineJoin = 'round';
            this._pathElement.fillColor = new Color(0, 0, 0, 0.0);
            this._pathElement.horizontalCenter = 0;
            this._pathElement.bottom = 28;
        }
        return this._pathElement;
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
            this._labelElement.enabled = false;
            this._labelElement.typeFace = new TypeFace('Cerebri Sans', 0.7, 0.1, -0.02);
            this._labelElement.fontSize = 8;
            this._labelElement.fontWeight = 600;
            this._labelElement.textColor = new Color(216, 32, 69);
            this._labelElement.horizontalCenter = 0;
            this._labelElement.bottom = 13;
            this._labelElement.letterSpacing = 1;
        }
        return this._labelElement;
    }
}
customElements.define('nav-bar-item-view', NavBarItemView);
