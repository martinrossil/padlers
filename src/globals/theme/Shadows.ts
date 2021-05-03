import { Color, IFilter, ShadowFilter } from 'enta';
import IShadows from './IShadows';

export default class Shadows implements IShadows {
    private _cardShadow!: IFilter;

    public get cardShadow(): IFilter {
        if (!this._cardShadow) {
            this._cardShadow = new ShadowFilter(0, 2, 4, new Color(213, 56, 16, 0.08))
        }
        return this._cardShadow;
    }
}
