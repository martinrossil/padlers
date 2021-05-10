import { BoxShadowFilter, Color, HorizontalLayout, List } from 'enta';
import { PadlersEvents } from '../events/PadlersEvents';
import I18N from '../globals/i18n/I18N';
import INavBarItem from './INavBarItem';
import NavBarItemView from './NavBarItemView';

export default class NavBar extends List<INavBarItem> {
    public constructor() {
        super();
        this.name = 'NavBar';
        this.bottom = 0;
        this.height = 65;
        this.percentWidth = 100;
        this.verticalScrollEnabled = false;
        this.cornerSizeTopLeft = this.cornerSizeTopRight = 20;
        this.backgroundColor = new Color(0, 0, 100);
        this.ItemRendererClass = NavBarItemView;
        this.layout = new HorizontalLayout(0, 'fill', 'middle');
        this.addFilter(new BoxShadowFilter(0, 0, 20, 0, new Color(0, 0, 0, 0.15)));
        this.dataProvider = I18N.currentLocale.navBarItems;
        this.selectedIndex = 0;
        I18N.dispatcher.addEventListener('localeChanged', () => { this.dataProvider = I18N.currentLocale.navBarItems; });
        this.addEventListener('selectedIndexChanged', this.navIndexChanged);
    }

    private navIndexChanged(): void {
        this.dispatch(PadlersEvents.NAV_INDEX_CHANGED, this.selectedIndex, true);
    }
}
customElements.define('nav-bar', NavBar);
