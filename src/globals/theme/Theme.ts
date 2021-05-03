import Colors from './Colors';
import IColors from './IColors';
import IShadows from './IShadows';
import ITypography from './ITypography';
import Shadows from './Shadows';
import Typography from './Typography';

export default class Theme {
    public static colors: IColors = new Colors();
    public static typography: ITypography = new Typography();
    public static shadows: IShadows = new Shadows();
}
