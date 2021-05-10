import HomeScreen from './home/HomeScreen';
import MatchesScreen from './matches/MatchesScreen';
import RankScreen from './ranking/RankScreen';
import SocialScreen from './social/SocialScreen';
import TournamentsScreen from './tournaments/TournamentsScreen';
import IScreens from './IScreens';
import IAccount from '../interfaces/vo/IAccount';
import { ScreenNavigator } from 'enta';
import IBaseScreen from '../interfaces/screens/IBaseScreen';

export default class Screens extends ScreenNavigator implements IScreens {
    public constructor() {
        super();
        this.name = 'Screens';
        this.percentWidth = 100;
        this.top = 0;
        this.bottom = 65;
        this.addElements([this.homeScreen,
                            new SocialScreen(),
                            new MatchesScreen(),
                            new TournamentsScreen(),
                            new RankScreen()]);
        this.screenIndex = 0;
    }

    private _homeScreen!: IBaseScreen;

    private get homeScreen(): IBaseScreen {
        if (!this._homeScreen) {
            this._homeScreen = new HomeScreen();
        }
        return this._homeScreen;
    }

    private accountChanged(): void {
        this.homeScreen.account = this.account;
    }

    private _account: IAccount | null = null;

    public set account(value: IAccount | null) {
        if (this._account === value) {
            return;
        }
        this._account = value;
        this.accountChanged();
    }

    public get account(): IAccount | null {
        return this._account;
    }
}
customElements.define('screens-element', Screens);
