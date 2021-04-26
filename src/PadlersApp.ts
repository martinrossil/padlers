import { ApplicationElement, Color } from 'enta';
import BottomNavigation from './components/bottom/BottomNavigation';
import PadelScore from './components/PadelScore';
import TopBar from './components/TopBar';

export default class PadlersApp extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PadlersApp';
        this.backgroundColor = new Color(240, 20, 98);
        this.addElement(new TopBar());
        this.addElement(new PadelScore());
        this.addElement(new BottomNavigation());
    }
}
customElements.define('padlers-app', PadlersApp);
