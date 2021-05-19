import { ArrayCollection, BoxShadowFilter, Color, DisplayContainer, IArrayCollection, ILabelElement, IList, List, VerticalLayout } from 'enta';
import Factory from '../../globals/factory/Factory';
import Theme from '../../globals/theme/Theme';
import IChatMessage from '../../interfaces/vo/IChatMessage';
import ChatMessage from '../../vo/ChatMessage';
import ChatMessageView from './ChatMessageView';

export default class SocialScreen extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'SocialScreen';
        this.percentWidth = this.percentHeight = 100;
        this.visible = false;
        this.addElements([this.titleLabel, this.descriptionLabel, this.messagesList]);
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

    private _messagesList!: IList<IChatMessage>;

    private get messagesList(): IList<IChatMessage> {
        if (!this._messagesList) {
            this._messagesList = new List();
            this._messagesList.layout = new VerticalLayout(16, 'fill');
            this._messagesList.top = 187;
            this._messagesList.bottom = 0;
            this._messagesList.percentWidth = 100;
            this._messagesList.backgroundColor = Theme.colors.white;
            this._messagesList.cornerSizeTopLeft = 20;
            this._messagesList.cornerSizeTopRight = 20;
            this._messagesList.ItemRendererClass = ChatMessageView;
            this._messagesList.addFilter(new BoxShadowFilter(0, 0, 20, 0, new Color(0, 0, 0, 0.15)));
            this._messagesList.dataProvider = this.messages;
        }
        return this._messagesList;
    }

    private _messages!: IArrayCollection<IChatMessage>;

    private get messages(): IArrayCollection<IChatMessage> {
        if (!this._messages) {
            this._messages = new ArrayCollection([
                new ChatMessage(null, 'You either die Spongebob or you live long enough.', new Date()),
                new ChatMessage(null, 'You either die Spongebob or you live long enough.', new Date()),
                new ChatMessage(null, 'You either die Spongebob or you live long enough.', new Date())
            ]);
        }
        return this._messages;
    }
}
customElements.define('social-screen', SocialScreen);
