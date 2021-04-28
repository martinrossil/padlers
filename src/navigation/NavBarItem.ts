import INavBarItem from './INavBarItem';

export default class NavBarItem implements INavBarItem {
    public icon: string;
    public text: string;
    public constructor(icon: string, text: string) {
        this.icon = icon;
        this.text = text;
    }
}
