import IBottomNavigationItem from './IBottomNavigationItem';

export default class BottomNavigationItem implements IBottomNavigationItem {
    public icon: string;
    public text: string;
    public constructor(icon: string, text: string) {
        this.icon = icon;
        this.text = text;
    }
}
