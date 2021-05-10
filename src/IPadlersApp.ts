import { IDisplayContainer, IList } from 'enta';
import INavBarItem from './navigation/INavBarItem';
import IScreens from './screens/IScreens';

export default interface IPadlersApp extends IDisplayContainer {
    screens: IScreens;
    navBar: IList<INavBarItem>
}
