import { ItemRenderer } from 'enta';
import IChatMessage from '../../interfaces/vo/IChatMessage';

export default class ChatMessageView extends ItemRenderer<IChatMessage> {
    public constructor() {
        super();
        this.name = 'ChatMessageView';
        this.height = 65;
    }
}
customElements.define('chat-message-view', ChatMessageView);
