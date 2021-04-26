import { ApplicationElement } from 'enta';

export default class PadlersApp extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'PadlersApp';
    }
}
customElements.define('padlers-app', PadlersApp);
