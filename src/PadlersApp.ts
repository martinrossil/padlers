import { ApplicationElement, IList } from 'enta';
import { PadlersEvents } from './events/PadlersEvents';
import Theme from './globals/theme/Theme';
import IPadlersApp from './IPadlersApp';
import PadlersMachine from './machines/PadlersMachine';
import INavBarItem from './navigation/INavBarItem';
import NavBar from './navigation/NavBar';
import IScreens from './screens/IScreens';
import Screens from './screens/Screens';

export default class PadlersApp extends ApplicationElement implements IPadlersApp {
    public constructor() {
        super();
        this.name = 'PadlersApp';
        this.backgroundColor = Theme.colors.applicationBackground;
        window.addEventListener('load', () => { this.dispatch(PadlersEvents.LOAD_COMPLETED); });
    }

    private padlersMachine: PadlersMachine = new PadlersMachine(this);

    public screens: IScreens = new Screens();

    public navBar: IList<INavBarItem> = new NavBar();
}
customElements.define('padlers-app', PadlersApp);
