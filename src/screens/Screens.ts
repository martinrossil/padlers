import Theme from '../globals/theme/Theme';
import HomeScreen from './HomeScreen';
import MatchesScreen from './MatchesScreen';
import RankScreen from './RankScreen';
import ScreenNavigator from './ScreenNavigator';
import SocialScreen from './SocialScreen';
import TournamentsScreen from './TournamentsScreen';

export default class Screens extends ScreenNavigator {
    public constructor() {
        super();
        this.name = 'Screens';
        this.backgroundColor = Theme.colors.primaryBlue;
        this.percentWidth = 100;
        this.top = 0;
        this.bottom = 75;
        this.addElements([new HomeScreen(),
                            new SocialScreen(),
                            new MatchesScreen(),
                            new TournamentsScreen(),
                            new RankScreen()]);
        this.screenIndex = 0;
    }
}
customElements.define('screens-element', Screens);
