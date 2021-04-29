import Colors from './Colors';
import IColors from './IColors';
import ITypography from './ITypography';
import Typography from './Typography';

export default class Theme {
    public static colors: IColors = new Colors();
    public static typography: ITypography = new Typography();
}
