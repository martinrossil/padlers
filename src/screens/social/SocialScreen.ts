import { DisplayContainer, ILabelElement } from 'enta';
import Factory from '../../globals/factory/Factory';
import Theme from '../../globals/theme/Theme';

export default class SocialScreen extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'SocialScreen';
        this.percentWidth = this.percentHeight = 100;
        this.visible = false;
        this.addElements([this.titleLabel, this.descriptionLabel]);
    }

    private _titleLabel!: ILabelElement;

    private get titleLabel(): ILabelElement {
        if (!this._titleLabel) {
            this._titleLabel = Factory.getCeribriSansLabel(Theme.colors.primaryText, 28, -0.1, 600);
            this._titleLabel.left = 20;
            this._titleLabel.top = 24;
            this._titleLabel.text = 'Social'; // I18N
        }
        return this._titleLabel;
    }

    private _descriptionLabel!: ILabelElement;

    private get descriptionLabel(): ILabelElement {
        if (!this._descriptionLabel) {
            this._descriptionLabel = Factory.getCeribriSansLabel(Theme.colors.primaryText, 16, -0.1, 600);
            this._descriptionLabel.left = 20;
            this._descriptionLabel.top = 112;
            this._descriptionLabel.text = 'Somthing needs to be done here...'; // I18N
        }
        return this._descriptionLabel;
    }

    // private _friendsList!: IList<
}
customElements.define('social-screen', SocialScreen);
