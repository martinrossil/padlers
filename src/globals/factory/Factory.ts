import { DisplayElement, FontWeight, IColor, IDisplayElement, ILabelElement, ITextElement, LabelElement, TextElement } from 'enta';
import Theme from '../theme/Theme';

export default class Factory {
    public static getLine(width = NaN, height = NaN, backgroundColor: IColor | null = null, percentWidth = NaN, percentHeight = NaN): IDisplayElement {
        const line: IDisplayElement = new DisplayElement();
        line.width = width;
        line.height = height;
        line.percentWidth = percentWidth;
        line.percentHeight = percentHeight;
        line.backgroundColor = backgroundColor;
        return line;
    }

    public static getCeribriSansLabel(textColor: IColor, fontSize: number, letterSpacing = 0, fontWeight: FontWeight): ILabelElement {
        const label: ILabelElement = new LabelElement();
        label.typeFace = Theme.typography.ceribriSans;
        label.textColor = textColor;
        label.fontWeight = fontWeight;
        label.fontSize = fontSize;
        label.letterSpacing = letterSpacing;
        return label;
    }

    public static getCeribriSansText(textColor: IColor, fontSize: number, letterSpacing = 0, fontWeight: FontWeight): ITextElement {
        const text: ITextElement = new TextElement();
        text.typeFace = Theme.typography.ceribriSans;
        text.textColor = textColor;
        text.fontWeight = fontWeight;
        text.fontSize = fontSize;
        text.letterSpacing = letterSpacing;
        return text;
    }

    public static getRobotoLabel(textColor: IColor, fontSize: number, letterSpacing = 0): ILabelElement {
        const label: ILabelElement = new LabelElement();
        label.typeFace = Theme.typography.robotoMono;
        label.textColor = textColor;
        label.fontWeight = 700;
        label.fontSize = fontSize;
        label.letterSpacing = letterSpacing;
        return label;
    }
}
