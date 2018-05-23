export interface ModifyClassOptions {
    element: Element;
    className: string;
}
export default class Util {
    private static hasClass(element, className);
    static addClass(options: Array<ModifyClassOptions>): void;
    static removeClass(options: Array<ModifyClassOptions>): void;
}
