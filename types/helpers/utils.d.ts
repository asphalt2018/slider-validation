export interface ModifyClassOptions {
    element: Element;
    className: string;
}
export default class Util {
    static addClass(options: Array<ModifyClassOptions>): void;
    static removeClass(options: Array<ModifyClassOptions>): void;
    private static hasClass(element, className);
}
