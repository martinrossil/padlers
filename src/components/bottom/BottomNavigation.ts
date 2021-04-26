import { ArrayCollection, BoxShadowFilter, Color, HorizontalLayout, IArrayCollection, List } from 'enta';
import BottomNavigationItem from './BottomNavigationItem';
import BottomNavigationRenderer from './BottomNavigationItemRenderer';
import IBottomNavigationItem from './IBottomNavigationItem';

export default class BottomNavigation extends List<IBottomNavigationItem> {
    public constructor() {
        super();
        this.name = 'BottomBar';
        this.bottom = 0;
        this.height = 65;
        this.percentWidth = 100;
        this.verticalScrollEnabled = false;
        this.cornerSizeTopLeft = this.cornerSizeTopRight = 20;
        this.backgroundColor = new Color(0, 0, 100);
        this.ItemRendererClass = BottomNavigationRenderer;
        this.layout = new HorizontalLayout(0, 'fill', 'middle');
        this.addFilter(new BoxShadowFilter(0, 0, 20, 0, new Color(0, 0, 0, 0.15)));
        this.dataProvider = this.navigationItems;
    }

    private _navigationItems!: IArrayCollection<IBottomNavigationItem>;

    private get navigationItems(): IArrayCollection<IBottomNavigationItem> {
        if (!this._navigationItems) {
            this._navigationItems = new ArrayCollection([
                new BottomNavigationItem('', 'HOME'),
                new BottomNavigationItem('', 'HOME'),
                new BottomNavigationItem('', 'HOME'),
                new BottomNavigationItem('', 'HOME'),
                new BottomNavigationItem('', 'HOME')
            ]);
        }
        return this._navigationItems;
    }
}
customElements.define('bottom-navigation', BottomNavigation);
