export interface ModifyClassOptions {
  element: Element,
  className: string
}

export default class Util {
  private static hasClass(element: Element, className: string): boolean {
    return !!element.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
  }

  public static addClass(options: Array<ModifyClassOptions>): void {
    for (let option of options) {
      if (!this.hasClass(option.element, option.className)) {
        option.element.className += ` ${option.className}`
      }
    }
  }

  public static removeClass(options: Array<ModifyClassOptions>): void {
    for (let option of options) {
      if (this.hasClass(option.element, option.className)) {
        const reg = new RegExp(`(\\s|^)${option.className}(\\s|$)`);
        option.element.className = option.element.className.replace(reg, ' ');
      }
    }
  }
}


