import { Cursor, ILabelElement, IPathElement, ItemRenderer, LabelElement, PathElement } from 'enta';
import Theme from '../globals/theme/Theme';
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
            this.pathElement.strokeColor = Theme.colors.secondaryText;
            this.labelElement.textColor = Theme.colors.secondaryText;
        } else {
            this.pathElement.strokeColor = Theme.colors.primaryBlue;
            this.labelElement.textColor = Theme.colors.primaryBlue;
        }
    }

    protected selectedChanged(): void {
        if (this.selected) {
            this.pathElement.strokeColor = Theme.colors.primaryBlue;
            this.labelElement.textColor = Theme.colors.primaryBlue;
        } else {
            this.pathElement.strokeColor = Theme.colors.secondaryText;
            this.labelElement.textColor = Theme.colors.secondaryText;
        }
    }

    private _pathElement!: IPathElement;

    private get pathElement(): IPathElement {
        if (!this._pathElement) {
            this._pathElement = new PathElement();
            this._pathElement.size(24, 24);
            this._pathElement.strokeColor = Theme.colors.secondaryText;
            this._pathElement.strokeWidth = 2;
            this._pathElement.strokeLineCap = 'round';
            this._pathElement.strokeLineJoin = 'round';
            this._pathElement.fillColor = Theme.colors.transparent;
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
            this._labelElement.typeFace = Theme.typography.ceribriSans;
            this._labelElement.fontSize = 8;
            this._labelElement.fontWeight = 600;
            this._labelElement.textColor = Theme.colors.secondaryText;
            this._labelElement.horizontalCenter = 0;
            this._labelElement.bottom = 13;
            this._labelElement.letterSpacing = 1;
        }
        return this._labelElement;
    }
}
customElements.define('nav-bar-item-view', NavBarItemView);
