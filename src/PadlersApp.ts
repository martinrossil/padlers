import { ApplicationElement, Color } from 'enta';
import I18N from './globals/i18n/I18N';
import NavBar from './navigation/NavBar';

export default class PadlersApp extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PadlersApp';
        this.backgroundColor = new Color(240, 20, 98);
        this.addElements([new NavBar()]);
        window.addEventListener('click', () => {
            I18N.currentLocale = I18N.SWEDISH;
        });
    }
}
customElements.define('padlers-app', PadlersApp);
