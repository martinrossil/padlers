import IAccount from '../interfaces/vo/IAccount';
import IChatMessage from '../interfaces/vo/IChatMessage';

export default class ChatMessage implements IChatMessage {
    public from: IAccount | null;
    public message: string;
    public created: Date;
    public constructor(from: IAccount |null, message: string, created: Date) {
        this.from = from;
        this.message = message;
        this.created = created;
    }
}
