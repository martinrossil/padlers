import { DisplayContainer, IDisplayContainer, IImageElement, ILabelElement, ImageElement } from 'enta';
import Factory from '../../globals/factory/Factory';
import Theme from '../../globals/theme/Theme';
import BaseScreen from '../BaseScreen';
import IRankingCard from './IRankingCard';
import RankingCard from './RankingCard';

export default class HomeScreen extends BaseScreen {
    public constructor() {
        super();
        this.name = 'HomeScreen';
        this.percentWidth = this.percentHeight = 100;
        this.visible = false;
        this.addElements([
            this.profileRankContainer
        ]);
    }

    protected accountChanged(): void {
        console.log(this.name, 'accountChanged()', this.account);
        if (this.account) {
            this.nameLabel.text = this.account.firstName + ' ' + this.account.lastName;
            this.profileImage.source = 'profile/' + this.account.uid + '.jpg';
            this.rankingCard.rank = this.account.rank;
        } else {
            this.nameLabel.text = '';
            this.profileImage.source = '';
            this.rankingCard.rank = null;
        }
    }

    private _profileRankContainer!: IDisplayContainer;

    private get profileRankContainer(): IDisplayContainer {
        if (!this._profileRankContainer) {
            this._profileRankContainer = new DisplayContainer();
            this._profileRankContainer.percentWidth = 100;
            // this._profileRankContainer.height = 265;
            this._profileRankContainer.addElements([this.profileContainer, this.rankingCard]);
        }
        return this._profileRankContainer;
    }

    private _profileContainer!: IDisplayContainer;

    private get profileContainer(): IDisplayContainer {
        if (!this._profileContainer) {
            this._profileContainer = new DisplayContainer();
            this._profileContainer.backgroundColor = Theme.colors.primaryBlue;
            this._profileContainer.percentWidth = 100;
            this._profileContainer.height = 150;
            this._profileContainer.cornerSizeBottomLeft = 20;
            this._profileContainer.cornerSizeBottomRight = 20;
            this._profileContainer.addElements([this.welcomeLabel, this.nameLabel, this.profileImage]);
        }
        return this._profileContainer;
    }

    private _welcomeLabel!: ILabelElement;

    private get welcomeLabel(): ILabelElement {
        if (!this._welcomeLabel) {
            this._welcomeLabel = Factory.getCeribriSansLabel(Theme.colors.whiteOpacity, 15, 0.5, 600);
            this._welcomeLabel.text = 'Velkommen'; // I18N
            this._welcomeLabel.left = 20;
            this._welcomeLabel.top = 22;
        }
        return this._welcomeLabel;
    }

    private _nameLabel!: ILabelElement;

    private get nameLabel(): ILabelElement {
        if (!this._nameLabel) {
            this._nameLabel = Factory.getCeribriSansLabel(Theme.colors.white, 35, 0.5, 600);
            this._nameLabel.left = 20;
            this._nameLabel.top = 48;
        }
        return this._nameLabel;
    }

    private _profileImage!: IImageElement;

    private get profileImage(): IImageElement {
        if (!this._profileImage) {
            this._profileImage = new ImageElement();
            this._profileImage.size(55, 55);
            this._profileImage.top = 30;
            this._profileImage.right = 28;
            this._profileImage.cornerSize = 27.5;
            this._profileImage.clip = 'hidden';
        }
        return this._profileImage;
    }

    private _rankingCard!: IRankingCard;

    private get rankingCard(): IRankingCard {
        if (!this._rankingCard) {
            this._rankingCard = new RankingCard();
        }
        return this._rankingCard;
    }
}
customElements.define('home-screen', HomeScreen);
