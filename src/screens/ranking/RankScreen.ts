import { DisplayContainer, ILabelElement } from 'enta';
import Factory from '../../globals/factory/Factory';
import Theme from '../../globals/theme/Theme';

export default class RankScreen extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'RankScreen';
        this.percentWidth = this.percentHeight = 100;
        this.visible = false;
        this.addElement(this.titleLabel);
    }

    private _titleLabel!: ILabelElement;

    private get titleLabel(): ILabelElement {
        if (!this._titleLabel) {
            this._titleLabel = Factory.getCeribriSansLabel(Theme.colors.primaryText, 28, -0.1, 600);
            this._titleLabel.left = 20;
            this._titleLabel.top = 24;
            this._titleLabel.text = 'Rangering'; // I18N
        }
        return this._titleLabel;
    }
}
customElements.define('rank-screen', RankScreen);
