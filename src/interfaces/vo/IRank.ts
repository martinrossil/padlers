import { IColor } from 'enta';

export default interface IRank {
    medal: number;
    level: number;
    elo: number;
    readonly medalColor: IColor;
    readonly medalName: string;
    readonly levelName: string;
}
