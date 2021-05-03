import { IScreenNavigator } from 'enta';
import IAccount from '../interfaces/vo/IAccount';

export default interface IScreens extends IScreenNavigator {
    account: IAccount | null;
}
