import { IEventListener, IState, Machine, State } from 'enta';
import { PadlersEvents } from '../events/PadlersEvents';
import IAccount from '../interfaces/vo/IAccount';
import IRank from '../interfaces/vo/IRank';
import IPadlersApp from '../IPadlersApp';
import Account from '../vo/Account';
import Rank from '../vo/Rank';

export default class PadlersMachine extends Machine<IPadlersApp> {
    public constructor(host: IPadlersApp) {
        super(host);
        this.onLoadCompleted = this.onLoadCompleted.bind(this);
        this.navIndexChanged = this.navIndexChanged.bind(this);
        this.initial.addTransition(PadlersEvents.LOAD_COMPLETED, this.loadCompleted);
        this.host.addEventListener(PadlersEvents.LOAD_COMPLETED, this.send);
    }

    private _loadCompleted!: IState;

    private get loadCompleted(): IState {
        if (!this._loadCompleted) {
            this._loadCompleted = new State('loadCompletedState');
            this._loadCompleted.on = this.onLoadCompleted;
        }
        return this._loadCompleted;
    }

    private onLoadCompleted(): void {
        this.host.screens.account = this.account;
        this.host.addElements([this.host.screens, this.host.navBar]);
        this.host.addEventListener(PadlersEvents.NAV_INDEX_CHANGED, this.navIndexChanged as IEventListener);
    }

    private navIndexChanged(e: CustomEvent<number>): void {
        this.host.screens.screenIndex = e.detail;
    }

    private _account!: IAccount;

    private get account(): IAccount {
        if (!this._account) {
            this._account = new Account('abcde', 'Hans', 'Kristoffer', 22, 'hans@bookli.dk', this.rank);
        }
        return this._account;
    }

    private _rank!: IRank;

    private get rank(): IRank {
        if (!this._rank) {
            this._rank = new Rank(0, 3, 2301);
        }
        return this._rank;
    }
}
