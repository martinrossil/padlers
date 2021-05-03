import { IDisplayContainer } from 'enta';
import IRank from '../../interfaces/vo/IRank';

export default interface IRankingCard extends IDisplayContainer {
    rank: IRank | null;
}
