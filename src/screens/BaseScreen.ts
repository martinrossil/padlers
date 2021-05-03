import { ScrollContainer } from 'enta';
import IBaseScreen from '../interfaces/screens/IBaseScreen';
import IAccount from '../interfaces/vo/IAccount';

export default class BaseScreen extends ScrollContainer implements IBaseScreen {
    public constructor() {
        super();
        this.name = 'HomeScreen';
        this.percentWidth = this.percentHeight = 100;
        this.visible = false;
    }

    protected accountChanged(): void {
        console.log(this.name, 'accountChanged()', this.account);
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
customElements.define('base-screen', BaseScreen);
