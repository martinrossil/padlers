import { IArrayCollection } from 'enta';
import INavBarItem from '../../../navigation/INavBarItem';

export default interface ILocale {
    readonly navBarItems: IArrayCollection<INavBarItem>;
    readonly gold: string;
    readonly points: string;
    readonly yourPadelScore: string;
    readonly rankingCardDescription: string;
    readonly learnAboutRankingSystem: string;
}
