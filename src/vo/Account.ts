import IAccount from '../interfaces/vo/IAccount';
import IRank from '../interfaces/vo/IRank';

export default class Account implements IAccount {
    public uid: string;
    public firstName: string;
    public lastName: string;
    public age: number;
    public email: string;
    public rank: IRank;
    public constructor(uid: string, firstName: string, lastName: string, age: number, email: string, rank: IRank) {
        this.uid = uid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.rank = rank;
    }
}
