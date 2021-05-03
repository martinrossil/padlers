import { IScrollContainer } from 'enta';
import IAccount from '../vo/IAccount';

export default interface IBaseScreen extends IScrollContainer {
    account: IAccount | null;
}
