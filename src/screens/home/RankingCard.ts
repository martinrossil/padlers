import { DisplayContainer, HorizontalLayout, IDisplayContainer, IDisplayElement, ILabelElement, ITextElement, VerticalLayout } from 'enta';
import Factory from '../../globals/factory/Factory';
import I18N from '../../globals/i18n/I18N';
import Theme from '../../globals/theme/Theme';
import IRank from '../../interfaces/vo/IRank';
import IRankingCard from './IRankingCard';

export default class RankingCard extends DisplayContainer implements IRankingCard {
    public constructor() {
        super();
        this.name = 'RankingCard';
        this.backgroundColor = Theme.colors.white;
        this.left = this.right = 20;
        this.top = 104;
        this.height = 161;
        this.cornerSize = 10;
        this.addFilter(Theme.shadows.cardShadow);
        this.layout = new HorizontalLayout(0, 'fill', 'fill');
        this.addElements([this.leftSide, this.verticalLine, this.rightSide]);
    }

    private _leftSide!: IDisplayContainer;

    private get leftSide(): IDisplayContainer {
        if (!this._leftSide) {
            this._leftSide = new DisplayContainer();
            this._leftSide.width = 98;
            this._leftSide.paddingX = 24;
            this._leftSide.paddingY = 20;
            this._leftSide.layout = new VerticalLayout(14, 'center');
            this._leftSide.addElements([this.medalNameLabel, this.levelLabel, this.horizontalLine, this.pointsLabel, this.eloLabel]);
        }
        return this._leftSide;
    }

    private _medalNameLabel!: ILabelElement;

    private get medalNameLabel(): ILabelElement {
        if (!this._medalNameLabel) {
            this._medalNameLabel = Factory.getRobotoLabel(Theme.colors.primaryText, 15, 2);
        }
        return this._medalNameLabel;
    }

    private _levelLabel!: ILabelElement;

    private get levelLabel(): ILabelElement {
        if (!this._levelLabel) {
            this._levelLabel = Factory.getRobotoLabel(Theme.colors.primaryText, 36, 1);
        }
        return this._levelLabel;
    }

    private horizontalLine: IDisplayElement = Factory.getLine(98, 1, Theme.colors.whiteOpacity);

    private _pointsLabel!: ILabelElement;

    private get pointsLabel(): ILabelElement {
        if (!this._pointsLabel) {
            this._pointsLabel = Factory.getRobotoLabel(Theme.colors.primaryTextOpacity, 15, 2);
            this._pointsLabel.text = I18N.currentLocale.points;
        }
        return this._pointsLabel;
    }

    private _eloLabel!: ILabelElement;

    private get eloLabel(): ILabelElement {
        if (!this._eloLabel) {
            this._eloLabel = Factory.getRobotoLabel(Theme.colors.primaryText, 24, 1);
        }
        return this._eloLabel
    }

    private verticalLine: IDisplayElement = Factory.getLine(1, NaN, Theme.colors.whiteOpacity, NaN, 100);

    private _rightSide!: IDisplayContainer;

    private get rightSide(): IDisplayContainer {
        if (!this._rightSide) {
            this._rightSide = new DisplayContainer();
            this._rightSide.paddingX = 24;
            this._rightSide.paddingY = 20;
            this._rightSide.layout = new VerticalLayout(24);
            this._rightSide.addElements([this.yourScoreLabel, this.descriptionText, this.learnAboutLabel, this.progressBar]);
        }
        return this._rightSide;
    }

    private _yourScoreLabel!: ILabelElement;

    private get yourScoreLabel(): ILabelElement {
        if (!this._yourScoreLabel) {
            this._yourScoreLabel = Factory.getCeribriSansLabel(Theme.colors.primaryText, 15, 0, 600);
            this._yourScoreLabel.text = I18N.currentLocale.yourPadelScore;
        }
        return this._yourScoreLabel;
    }

    private _descriptionText!: ITextElement;

    private get descriptionText(): ITextElement {
        if (!this._descriptionText) {
            this._descriptionText = Factory.getCeribriSansText(Theme.colors.tertiaryText, 13, 0, 400);
            this._descriptionText.width = 188;
            this._descriptionText.text = I18N.currentLocale.rankingCardDescription;
        }
        return this._descriptionText;
    }

    private _learnAboutLabel!: ILabelElement;

    private get learnAboutLabel(): ILabelElement {
        if (!this._learnAboutLabel) {
            this._learnAboutLabel = Factory.getCeribriSansLabel(Theme.colors.primaryBlue, 13, 0, 400);
            this._learnAboutLabel.width = 188;
            this._learnAboutLabel.text = I18N.currentLocale.learnAboutRankingSystem;
        }
        return this._learnAboutLabel;
    }

    private _progressBar!: IDisplayContainer;

    private get progressBar(): IDisplayContainer {
        if (!this._progressBar) {
            this._progressBar = new DisplayContainer();
            this._progressBar.width = 188;
            this._progressBar.addElements([this.track, this.progress]);
        }
        return this._progressBar;
    }

    private _track!: IDisplayElement;

    private get track(): IDisplayElement {
        if (!this._track) {
            this._track = Factory.getLine(NaN, 4, Theme.colors.whiteOpacity, 100);
            this._track.cornerSize = 2;
        }
        return this._track;
    }

    private _progress!: IDisplayElement;

    private get progress(): IDisplayElement {
        if (!this._progress) {
            this._progress = Factory.getLine(NaN, 4, Theme.colors.primaryText, 43);
            this._progress.cornerSize = 2;
        }
        return this._progress;
    }

    private rankChanged(): void {
        if (this.rank) {
            this.backgroundColor = this.rank.medalColor;
            this.medalNameLabel.text = this.rank.medalName;
            this.levelLabel.text = this.rank.levelName;
            this.eloLabel.text = this.rank.elo.toString();
        } else {
            this.backgroundColor = Theme.colors.white;
            this.medalNameLabel.text = '';
            this.levelLabel.text = '';
            this.eloLabel.text = '';
        }
    }

    private _rank: IRank | null = null;

    public set rank(value: IRank | null) {
        if (this._rank === value) {
            return;
        }
        this._rank = value;
        this.rankChanged();
    }

    public get rank(): IRank | null {
        return this._rank;
    }
}
customElements.define('ranking-card', RankingCard);
