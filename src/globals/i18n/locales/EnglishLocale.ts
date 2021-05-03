import { ArrayCollection, IArrayCollection } from 'enta';
import Icons from '../../../consts/Icons';
import INavBarItem from '../../../navigation/INavBarItem';
import NavBarItem from '../../../navigation/NavBarItem';
import ILocale from './ILocale';

export default class EnglishLocale implements ILocale {
    private _navBarItems!: IArrayCollection<INavBarItem>;

    public get navBarItems(): IArrayCollection<INavBarItem> {
        if (!this._navBarItems) {
            this._navBarItems = new ArrayCollection([
                new NavBarItem(Icons.HOME, 'HOME'),
                new NavBarItem(Icons.SOCIAL, 'SOCIAL'),
                new NavBarItem(Icons.MATCHES, 'MATCHES'),
                new NavBarItem(Icons.TOURNAMENTS, 'TOURNAMENTS'),
                new NavBarItem(Icons.RANK, 'RANK')
            ]);
        }
        return this._navBarItems;
    }

    public gold = 'GOLD';
    public points = 'Points';
    public yourPadelScore = 'Your padel score';
    public rankingCardDescription = 'You either die Spongebob or you live long enough.';
    public learnAboutRankingSystem = 'Learn about our ranking system';
}
