import { IArrayCollection } from 'enta';
import INavBarItem from '../../../navigation/INavBarItem';

export default interface ILocale {
    readonly navBarItems: IArrayCollection<INavBarItem>;
}
