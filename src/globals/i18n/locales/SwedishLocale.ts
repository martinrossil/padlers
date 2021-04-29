import { ArrayCollection, IArrayCollection } from 'enta';
import Icons from '../../../consts/Icons';
import INavBarItem from '../../../navigation/INavBarItem';
import NavBarItem from '../../../navigation/NavBarItem';
import ILocale from './ILocale';

export default class SwedishLocale implements ILocale {
    private _navBarItems!: IArrayCollection<INavBarItem>;

    public get navBarItems(): IArrayCollection<INavBarItem> {
        if (!this._navBarItems) {
            this._navBarItems = new ArrayCollection([
                new NavBarItem(Icons.HOME, 'HEM'),
                new NavBarItem(Icons.SOCIAL, 'SOCIAL'),
                new NavBarItem(Icons.MATCHES, 'KAMPE'),
                new NavBarItem(Icons.TOURNAMENTS, 'TURNERINGAR'),
                new NavBarItem(Icons.RANK, 'RÄCKVIDD')
            ]);
        }
        return this._navBarItems;
    }
}
