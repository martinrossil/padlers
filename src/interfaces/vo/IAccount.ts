import IRank from './IRank';

export default interface IAccount {
    uid: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    rank: IRank;
}
