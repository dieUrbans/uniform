import { HTMLElement, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';

const uChipCss = ":host{border-radius:1rem;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;grid-gap:0.5rem;gap:0.5rem}.slate{--tw-bg-opacity:1;background-color:rgba(203, 213, 225, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(203, 213, 225, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(15, 23, 42, var(--tw-text-opacity))}.stone{--tw-bg-opacity:1;background-color:rgba(212, 212, 212, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(212, 212, 212, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(23, 23, 23, var(--tw-text-opacity))}.red{--tw-bg-opacity:1;background-color:rgba(252, 165, 165, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(252, 165, 165, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(127, 29, 29, var(--tw-text-opacity))}.amber{--tw-bg-opacity:1;background-color:rgba(252, 211, 77, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(252, 211, 77, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(120, 53, 15, var(--tw-text-opacity))}.lime{--tw-bg-opacity:1;background-color:rgba(190, 242, 100, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(190, 242, 100, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(54, 83, 20, var(--tw-text-opacity))}.emerald{--tw-bg-opacity:1;background-color:rgba(110, 231, 183, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(110, 231, 183, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(6, 78, 59, var(--tw-text-opacity))}.teal{--tw-bg-opacity:1;background-color:rgba(94, 234, 212, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(94, 234, 212, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(19, 78, 74, var(--tw-text-opacity))}.cyan{--tw-bg-opacity:1;background-color:rgba(103, 232, 249, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(103, 232, 249, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(22, 78, 99, var(--tw-text-opacity))}.indigo{--tw-bg-opacity:1;background-color:rgba(165, 180, 252, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(165, 180, 252, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(49, 46, 129, var(--tw-text-opacity))}.fuchsia{--tw-bg-opacity:1;background-color:rgba(240, 171, 252, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(240, 171, 252, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(112, 26, 117, var(--tw-text-opacity))}.pink{--tw-bg-opacity:1;background-color:rgba(249, 168, 212, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(249, 168, 212, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(131, 24, 67, var(--tw-text-opacity))}.success{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(16, 185, 129, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms;background-color:rgba(16, 185, 129, var(--tw-bg-opacity));color:rgba(250, 250, 250, var(--tw-text-opacity))}.success:hover{--tw-border-opacity:1;border-color:rgba(5, 150, 105, var(--tw-border-opacity));--tw-shadow-color:rgba(110, 231, 183, 1);--tw-shadow:var(--tw-shadow-colored);--tw-bg-opacity:1;background-color:rgba(5, 150, 105, var(--tw-bg-opacity))}.error{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(220, 38, 38, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms;background-color:rgba(220, 38, 38, var(--tw-bg-opacity));color:rgba(250, 250, 250, var(--tw-text-opacity))}.error:hover{--tw-border-opacity:1;border-color:rgba(185, 28, 28, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 165, 165, 1);--tw-shadow:var(--tw-shadow-colored);--tw-bg-opacity:1;background-color:rgba(185, 28, 28, var(--tw-bg-opacity))}.warning{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(251, 191, 36, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(217, 119, 6, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms;background-color:rgba(251, 191, 36, var(--tw-bg-opacity));color:rgba(50, 50, 50, var(--tw-text-opacity))}.warning:hover{--tw-border-opacity:1;border-color:rgba(245, 158, 11, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 211, 77, 1);--tw-shadow:var(--tw-shadow-colored);--tw-bg-opacity:1;background-color:rgba(245, 158, 11, var(--tw-bg-opacity))}.primary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(59, 130, 246, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms;background-color:rgba(59, 130, 246, var(--tw-bg-opacity));color:rgba(250, 250, 250, var(--tw-text-opacity))}.primary:hover{--tw-border-opacity:1;border-color:rgba(37, 99, 235, var(--tw-border-opacity));--tw-shadow-color:rgba(147, 197, 253, 1);--tw-shadow:var(--tw-shadow-colored);--tw-bg-opacity:1;background-color:rgba(37, 99, 235, var(--tw-bg-opacity))}.secondary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(226, 232, 240, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(100, 116, 139, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms;background-color:rgba(226, 232, 240, var(--tw-bg-opacity));color:rgba(50, 50, 50, var(--tw-text-opacity))}.secondary:hover{--tw-border-opacity:1;border-color:rgba(203, 213, 225, var(--tw-border-opacity));--tw-shadow-color:rgba(226, 232, 240, 1);--tw-shadow:var(--tw-shadow-colored);--tw-bg-opacity:1;background-color:rgba(203, 213, 225, var(--tw-bg-opacity))}.small{font-size:0.875rem;line-height:1.25rem}.medium{font-size:1rem;line-height:1.5rem}.large{font-size:1.125rem;line-height:1.75rem}.left{padding-left:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem}.chip{border-radius:1rem;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;padding-right:0.75rem;grid-gap:0.5rem;gap:0.5rem}.label{font-weight:700;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.75rem;padding-right:0.75rem;--tw-backdrop-blur:var(--tw-empty, );--tw-backdrop-brightness:var(--tw-empty, );--tw-backdrop-contrast:var(--tw-empty, );--tw-backdrop-grayscale:var(--tw-empty, );--tw-backdrop-hue-rotate:var(--tw-empty, );--tw-backdrop-invert:var(--tw-empty, );--tw-backdrop-opacity:var(--tw-empty, );--tw-backdrop-saturate:var(--tw-empty, );--tw-backdrop-sepia:var(--tw-empty, );-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);--tw-backdrop-brightness:brightness(.9)}.bold{font-weight:600}.click{cursor:pointer}";

let UChip$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.uClick = createEvent(this, "uClick", 7);
    /**
     * color of the chip
     */
    this.design = 'stone';
    /**
     * size of the chip
     */
    this.size = 'medium';
    /**
     * set chip text bold
     */
    this.bold = false;
    /**
     * enable uClick event on chip
     */
    this.clickable = false;
    this.handleClick = () => {
      if (!this.clickable)
        return;
      this.uClick.emit();
    };
  }
  render() {
    return (h("div", { class: {
        chip: true,
        [this.size]: true,
        [this.design]: true,
        left: !this.label,
        click: this.clickable
      }, onClick: this.handleClick }, this.label && h("div", { class: "label" }, this.label), h("span", { class: {
        bold: this.bold
      } }, h("slot", null, "Chip"))));
  }
  static get style() { return uChipCss; }
};
UChip$1 = /*@__PURE__*/ proxyCustomElement(UChip$1, [1, "u-chip", {
    "design": [1],
    "size": [1],
    "label": [1],
    "bold": [4],
    "clickable": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-chip"];
  components.forEach(tagName => { switch (tagName) {
    case "u-chip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UChip$1);
      }
      break;
  } });
}

const UChip = UChip$1;
const defineCustomElement = defineCustomElement$1;

export { UChip, defineCustomElement };
