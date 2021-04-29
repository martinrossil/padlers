import { EventDispatcher, IEventDispatcher } from 'enta';
import DanishLocale from './locales/DanishLocale';
import ILocale from './locales/ILocale';
import EnglishLocale from './locales/EnglishLocale';
import GermanLocale from './locales/GermanLocale';
import SwedishLocale from './locales/SwedishLocale';

export default class I18N {
    public static DANISH: ILocale = new DanishLocale();
    public static ENGLISH: ILocale = new EnglishLocale();
    public static GERMAN: ILocale = new GermanLocale();
    public static SWEDISH: ILocale = new SwedishLocale();

    public static dispatcher: IEventDispatcher = new EventDispatcher();

    private static _currentLocale: ILocale;

    public static set currentLocale(locale: ILocale) {
        if (this._currentLocale === locale) {
            return;
        }
        this._currentLocale = locale;
        I18N.dispatcher.dispatch('localeChanged', null, false);
    }

    public static get currentLocale(): ILocale {
        if (!this._currentLocale) {
            this._currentLocale = new DanishLocale();
        }
        return this._currentLocale;
    }
}
