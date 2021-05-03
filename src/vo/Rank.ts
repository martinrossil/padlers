import { IColor } from 'enta';
import I18N from '../globals/i18n/I18N';
import Theme from '../globals/theme/Theme';
import IRank from '../interfaces/vo/IRank';

export default class Rank implements IRank {
    public medal: number;
    public level: number;
    public elo: number;
    public constructor(medal: number, level: number, elo: number) {
        this.medal = medal;
        this.level = level;
        this.elo = elo;
    }

    public get medalColor(): IColor {
        if (this.medal === 0) {
            return Theme.colors.gold;
        }
        return Theme.colors.white;
    }

    public get medalName(): string {
        if (this.medal === 0) {
            return I18N.currentLocale.gold;
        }
        return '';
    }

    public get levelName(): string {
        return '0' + this.level;
    }
}
