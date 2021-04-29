import { ITypeFace, TypeFace } from 'enta';
import ITypography from './ITypography';

export default class Typography implements ITypography {
    private _ceribriSans!: ITypeFace;

    public get ceribriSans(): ITypeFace {
        if (!this._ceribriSans) {
            this._ceribriSans = new TypeFace('Cerebri Sans', 0.7, 0.1, -0.02);
        }
        return this._ceribriSans;
    }

    private _robotoMono!: ITypeFace;

    public get robotoMono(): ITypeFace {
        if (!this._robotoMono) {
            this._robotoMono = new TypeFace('Roboto Mono', 0.7, 0.1, -0.02);
        }
        return this._robotoMono;
    }
}
