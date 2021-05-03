import { Color, IColor } from 'enta';
import IColors from './IColors';

export default class Colors implements IColors {
    private _primaryBlue!: IColor;

    public get primaryBlue(): IColor {
        if (!this._primaryBlue) {
            this._primaryBlue = new Color(214, 78, 54);
        }
        return this._primaryBlue;
    }

    private _secondaryText!: IColor;

    public get secondaryText(): IColor {
        if (!this._secondaryText) {
            this._secondaryText = new Color(216, 32, 69);
        }
        return this._secondaryText;
    }

    private _transparent!: IColor;

    public get transparent(): IColor {
        if (!this._transparent) {
            this._transparent = new Color(0, 0, 0, 0.0);
        }
        return this._transparent;
    }

    private _applicationBackground!: IColor;

    public get applicationBackground(): IColor {
        if (!this._applicationBackground) {
            this._applicationBackground = new Color(240, 20, 98);
        }
        return this._applicationBackground;
    }

    private _gold!: IColor;

    public get gold(): IColor {
        if (!this._gold) {
            this._gold = new Color(43, 100, 72);
        }
        return this._gold;
    }

    private _white!: IColor;

    public get white(): IColor {
        if (!this._white) {
            this._white = new Color(0, 0, 100);
        }
        return this._white;
    }

    private _whiteOpacity!: IColor;

    public get whiteOpacity(): IColor {
        if (!this._whiteOpacity) {
            this._whiteOpacity = new Color(0, 0, 100, 0.77);
        }
        return this._whiteOpacity;
    }

    private _primaryText!: IColor;

    public get primaryText(): IColor {
        if (!this._primaryText) {
            this._primaryText = new Color(212, 33, 18);
        }
        return this._primaryText;
    }

    private _primaryTextOpacity!: IColor;

    public get primaryTextOpacity(): IColor {
        if (!this._primaryTextOpacity) {
            this._primaryTextOpacity = new Color(212, 33, 18, 0.56);
        }
        return this._primaryTextOpacity;
    }

    private _tertiaryText!: IColor;

    public get tertiaryText(): IColor {
        if (!this._tertiaryText) {
            this._tertiaryText = new Color(213, 29, 33);
        }
        return this._tertiaryText;
    }
}
