import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uIconCss = "i.sc-u-icon{border-style:solid;border-width:2px;cursor:pointer;display:-ms-inline-grid;display:inline-grid;place-content:center;padding:0.75rem}i.sc-u-icon:hover{--tw-shadow:0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.primary.sc-u-icon{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(59, 130, 246, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.primary.sc-u-icon:hover{--tw-border-opacity:1;border-color:rgba(37, 99, 235, var(--tw-border-opacity));--tw-shadow-color:rgba(147, 197, 253, 1);--tw-shadow:var(--tw-shadow-colored)}.fill-primary.sc-u-icon{--tw-bg-opacity:1;background-color:rgba(59, 130, 246, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(250, 250, 250, var(--tw-text-opacity))}.fill-primary.sc-u-icon:hover{--tw-bg-opacity:1;background-color:rgba(37, 99, 235, var(--tw-bg-opacity))}.error.sc-u-icon{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(220, 38, 38, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.error.sc-u-icon:hover{--tw-border-opacity:1;border-color:rgba(185, 28, 28, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 165, 165, 1);--tw-shadow:var(--tw-shadow-colored)}.fill-error.sc-u-icon{--tw-bg-opacity:1;background-color:rgba(220, 38, 38, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(250, 250, 250, var(--tw-text-opacity))}.fill-error.sc-u-icon:hover{--tw-bg-opacity:1;background-color:rgba(185, 28, 28, var(--tw-bg-opacity))}.success.sc-u-icon{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(16, 185, 129, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.success.sc-u-icon:hover{--tw-border-opacity:1;border-color:rgba(5, 150, 105, var(--tw-border-opacity));--tw-shadow-color:rgba(110, 231, 183, 1);--tw-shadow:var(--tw-shadow-colored)}.fill-success.sc-u-icon{--tw-bg-opacity:1;background-color:rgba(16, 185, 129, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(250, 250, 250, var(--tw-text-opacity))}.fill-success.sc-u-icon:hover{--tw-bg-opacity:1;background-color:rgba(5, 150, 105, var(--tw-bg-opacity))}.warning.sc-u-icon{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(251, 191, 36, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(217, 119, 6, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.warning.sc-u-icon:hover{--tw-border-opacity:1;border-color:rgba(245, 158, 11, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 211, 77, 1);--tw-shadow:var(--tw-shadow-colored)}.fill-warning.sc-u-icon{--tw-bg-opacity:1;background-color:rgba(251, 191, 36, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(50, 50, 50, var(--tw-text-opacity))}.fill-warning.sc-u-icon:hover{--tw-bg-opacity:1;background-color:rgba(245, 158, 11, var(--tw-bg-opacity))}.secondary.sc-u-icon{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(226, 232, 240, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(100, 116, 139, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.secondary.sc-u-icon:hover{--tw-border-opacity:1;border-color:rgba(203, 213, 225, var(--tw-border-opacity));--tw-shadow-color:rgba(226, 232, 240, 1);--tw-shadow:var(--tw-shadow-colored)}.fill-secondary.sc-u-icon{--tw-bg-opacity:1;background-color:rgba(226, 232, 240, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(50, 50, 50, var(--tw-text-opacity))}.fill-secondary.sc-u-icon:hover{--tw-bg-opacity:1;background-color:rgba(203, 213, 225, var(--tw-bg-opacity))}.outline.sc-u-icon{background-color:transparent}.flat.sc-u-icon{background-color:transparent;border-color:transparent}.flat.sc-u-icon:hover{border-color:transparent}.square.sc-u-icon{border-radius:0px}.circle.sc-u-icon{border-radius:9999px}.rounded.sc-u-icon{border-radius:1rem}";

let UIcon$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * border style of the icon wrapper
     */
    this.borderRadius = 'rounded';
    /**
     * if true hide the border and background color of the wrapper
     */
    this.flat = false;
    /**
     * if true hide the background color of the wrapper
     */
    this.outline = false;
    /**
     * select the design of the icon wrapper
     */
    this.design = 'error';
    /**
     * if true, svg color matches color with design
     */
    this.udpateSvgColor = true;
  }
  componentDidRender() {
    if (!this.udpateSvgColor)
      return;
    const icon = this.el.querySelector('svg');
    const iconWrapper = this.el.querySelector('i');
    const { color } = getComputedStyle(iconWrapper);
    if (!icon)
      return;
    icon.style.fill = color;
  }
  render() {
    return (h("i", { class: {
        [this.design]: true,
        [`fill-${this.design}`]: !this.outline && !this.flat,
        outline: this.outline,
        flat: this.flat,
        [this.borderRadius]: true
      } }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return uIconCss; }
};
UIcon$1 = /*@__PURE__*/ proxyCustomElement(UIcon$1, [6, "u-icon", {
    "borderRadius": [1, "border-radius"],
    "flat": [4],
    "outline": [4],
    "design": [1],
    "udpateSvgColor": [4, "udpate-svg-color"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "u-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UIcon$1);
      }
      break;
  } });
}

const UIcon = UIcon$1;
const defineCustomElement = defineCustomElement$1;

export { UIcon, defineCustomElement };
