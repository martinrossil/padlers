import { ApplicationElement, IEventListener, IList } from 'enta';
import Theme from './globals/theme/Theme';
import INavBarItem from './navigation/INavBarItem';
import NavBar from './navigation/NavBar';
import IScreens from './screens/IScreens';
import Screens from './screens/Screens';
import Account from './vo/Account';
import IAccount from './interfaces/vo/IAccount';
import IRank from './interfaces/vo/IRank';
import Rank from './vo/Rank';

export default class PadlersApp extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PadlersApp';
        this.backgroundColor = Theme.colors.applicationBackground;
        this.navigationIndexChanged = this.navigationIndexChanged.bind(this);
        window.addEventListener('load', () => {
            const rank: IRank = new Rank(0, 3, 2301);
            const account: IAccount = new Account('abcde', 'Hans', 'Kristoffer', 22, 'hans@bookli.dk', rank);
            this.screens.account = account;
            this.addElements([this.screens, this.navBar]);
        });
    }

    private _screens!: IScreens;

    private get screens(): IScreens {
        if (!this._screens) {
            this._screens = new Screens();
        }
        return this._screens;
    }

    private _navBar!: IList<INavBarItem>;

    private get navBar(): IList<INavBarItem> {
        if (!this._navBar) {
            this._navBar = new NavBar();
            this._navBar.addEventListener('selectedIndexChanged', this.navigationIndexChanged as IEventListener);
        }
        return this._navBar;
    }

    private navigationIndexChanged(e: CustomEvent<number>): void {
        console.log(this.name, e.type, e.detail);
        this.screens.screenIndex = e.detail;
    }
}
customElements.define('padlers-app', PadlersApp);
