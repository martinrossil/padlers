import { ArrayCollection, IArrayCollection } from 'enta';
import Icons from '../../../consts/Icons';
import INavBarItem from '../../../navigation/INavBarItem';
import NavBarItem from '../../../navigation/NavBarItem';
import ILocale from './ILocale';

export default class GermanLocale implements ILocale {
    private _navBarItems!: IArrayCollection<INavBarItem>;

    public get navBarItems(): IArrayCollection<INavBarItem> {
        if (!this._navBarItems) {
            this._navBarItems = new ArrayCollection([
                new NavBarItem(Icons.HOME, 'ZUHAUSE'),
                new NavBarItem(Icons.SOCIAL, 'SOZIAL'),
                new NavBarItem(Icons.MATCHES, 'STREICHHÖLZER'),
                new NavBarItem(Icons.TOURNAMENTS, 'TURNIERE'),
                new NavBarItem(Icons.RANK, 'RANG')
            ]);
        }
        return this._navBarItems;
    }
}
