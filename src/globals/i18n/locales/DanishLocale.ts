import { ArrayCollection, IArrayCollection } from 'enta';
import Icons from '../../../consts/Icons';
import INavBarItem from '../../../navigation/INavBarItem';
import NavBarItem from '../../../navigation/NavBarItem';
import ILocale from './ILocale';

export default class DanishLocale implements ILocale {
    private _navBarItems!: IArrayCollection<INavBarItem>;

    public get navBarItems(): IArrayCollection<INavBarItem> {
        if (!this._navBarItems) {
            this._navBarItems = new ArrayCollection([
                new NavBarItem(Icons.HOME, 'HJEM'),
                new NavBarItem(Icons.SOCIAL, 'SOCIAL'),
                new NavBarItem(Icons.MATCHES, 'KAMPE'),
                new NavBarItem(Icons.TOURNAMENTS, 'TURNERINGER'),
                new NavBarItem(Icons.RANK, 'RANGERING')
            ]);
        }
        return this._navBarItems;
    }

    public gold = 'GULD';
    public points = 'Points';
    public yourPadelScore = 'Din padel score';
    public rankingCardDescription = 'Du dør enten Spongebob, eller du lever længe nok.';
    public learnAboutRankingSystem = 'Lær om vores ranking system';
}
