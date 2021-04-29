import { ApplicationElement, IEventListener, IList } from 'enta';
import Theme from './globals/theme/Theme';
import INavBarItem from './navigation/INavBarItem';
import NavBar from './navigation/NavBar';
import IScreenNavigator from './screens/IScreenNavigator';
import Screens from './screens/Screens';

export default class PadlersApp extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PadlersApp';
        this.backgroundColor = Theme.colors.applicationBackground;
        this.navigationIndexChanged = this.navigationIndexChanged.bind(this);
        this.addElements([this.screens, this.navBar]);
    }

    private _screens!: IScreenNavigator;

    private get screens(): IScreenNavigator {
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
