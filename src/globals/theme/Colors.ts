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
}
