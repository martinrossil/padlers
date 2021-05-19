import IAccount from './IAccount';

export default interface IChatMessage {
    from: IAccount | null;
    message: string;
    created: Date;
}
