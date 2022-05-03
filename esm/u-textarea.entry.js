import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-ac0beabc.js';

const uTextareaCss = ":host{width:100%}.resize-horizontal{resize:horizontal}.resize-vertical{resize:vertical}.resize-both{resize:both}.resize-none{resize:none}.wrapper{border-radius:1rem;--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity));display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;padding-top:0.5rem;padding-bottom:0.5rem;position:relative}.wrapper:hover{--tw-shadow:0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.textarea{background-color:transparent;border-width:0px;display:inline-block;-webkit-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;flex-grow:1;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";max-width:100vw;padding-bottom:0.75rem;padding-top:1.25rem;padding-left:0.5rem;padding-right:0.5rem;width:100%}.textarea:focus{outline:2px solid transparent;outline-offset:2px}.textarea-small{border-style:solid;border-width:1px;font-weight:400;font-size:0.875rem;line-height:1.25rem;padding-top:0px;padding-bottom:0px}.textarea-small .labeltop{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:.9;--tw-scale-y:.9;--tw-scale-z:.9;--tw-translate-y:-0.875rem}.textarea-medium{border-style:solid;border-width:2px;font-weight:600;font-size:1rem;line-height:1.5rem;padding-top:0px;padding-bottom:0px}.textarea-medium .labeltop{margin-left:0.125rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:.9;--tw-scale-y:.9;--tw-scale-z:.9;--tw-translate-y:-1.125rem}.textarea-large{border-style:solid;border-width:3px;font-weight:600;font-size:1.125rem;line-height:1.75rem;padding-top:0px;padding-bottom:0px}.textarea-large .labeltop{margin-left:0.25rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0px;padding-bottom:0px;z-index:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-scale-x:.9;--tw-scale-y:.9;--tw-scale-z:.9;--tw-translate-y:-1.375rem}.label{border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;pointer-events:none;position:absolute;left:0.5rem;top:0.25rem;letter-spacing:0.025em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-transition-duration:300ms;-o-transition-duration:300ms;transition-duration:300ms}.label-small{font-weight:400;font-size:0.875rem;line-height:1.25rem}.label-medium{font-weight:600;font-size:1rem;line-height:1.5rem}.label-large{font-weight:600;font-size:1.125rem;line-height:1.75rem}.label-success{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(16, 185, 129, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.label-success:hover{--tw-border-opacity:1;border-color:rgba(5, 150, 105, var(--tw-border-opacity));--tw-shadow-color:rgba(110, 231, 183, 1);--tw-shadow:var(--tw-shadow-colored)}.label-error{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(220, 38, 38, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.label-error:hover{--tw-border-opacity:1;border-color:rgba(185, 28, 28, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 165, 165, 1);--tw-shadow:var(--tw-shadow-colored)}.label-warning{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(251, 191, 36, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(217, 119, 6, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.label-warning:hover{--tw-border-opacity:1;border-color:rgba(245, 158, 11, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 211, 77, 1);--tw-shadow:var(--tw-shadow-colored)}.label-secondary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(226, 232, 240, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(100, 116, 139, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.label-secondary:hover{--tw-border-opacity:1;border-color:rgba(203, 213, 225, var(--tw-border-opacity));--tw-shadow-color:rgba(226, 232, 240, 1);--tw-shadow:var(--tw-shadow-colored)}.label-primary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(59, 130, 246, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.label-primary:hover{--tw-border-opacity:1;border-color:rgba(37, 99, 235, var(--tw-border-opacity));--tw-shadow-color:rgba(147, 197, 253, 1);--tw-shadow:var(--tw-shadow-colored)}.design-success{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(16, 185, 129, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.design-success:hover{--tw-border-opacity:1;border-color:rgba(5, 150, 105, var(--tw-border-opacity));--tw-shadow-color:rgba(110, 231, 183, 1);--tw-shadow:var(--tw-shadow-colored)}.design-error{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(220, 38, 38, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(220, 38, 38, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.design-error:hover{--tw-border-opacity:1;border-color:rgba(185, 28, 28, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 165, 165, 1);--tw-shadow:var(--tw-shadow-colored)}.design-warning{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(251, 191, 36, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(217, 119, 6, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.design-warning:hover{--tw-border-opacity:1;border-color:rgba(245, 158, 11, var(--tw-border-opacity));--tw-shadow-color:rgba(252, 211, 77, 1);--tw-shadow:var(--tw-shadow-colored)}.design-secondary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(226, 232, 240, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(100, 116, 139, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.design-secondary:hover{--tw-border-opacity:1;border-color:rgba(203, 213, 225, var(--tw-border-opacity));--tw-shadow-color:rgba(226, 232, 240, 1);--tw-shadow:var(--tw-shadow-colored)}.design-primary{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(59, 130, 246, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.design-primary:hover{--tw-border-opacity:1;border-color:rgba(37, 99, 235, var(--tw-border-opacity));--tw-shadow-color:rgba(147, 197, 253, 1);--tw-shadow:var(--tw-shadow-colored)}.disabled{cursor:not-allowed;opacity:0.5}.reset{cursor:pointer;position:absolute;right:0.125rem;top:0.125rem}";

let UTextarea = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.uInput = createEvent(this, "uInput", 7);
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.size = 'medium';
    this.design = 'secondary';
    this.resize = 'vertical';
    this.value = '';
    this.cols = 50;
    this.rows = 6;
    this.focused = false;
    this.resetValue = (e) => {
      if (e && !this.disabled && !this.readonly) {
        e.stopPropagation();
        e.preventDefault();
        this.value = '';
        this.textarea.value = '';
        this.textarea.focus();
        this.focused = true;
      }
    };
    this.handleInput = (e) => {
      const input = e.target;
      if (input) {
        this.value = input.value;
      }
    };
    this.handleFocus = () => {
      this.focused = true;
    };
    this.handleBlur = () => {
      this.focused = false;
    };
  }
  valueChanged() {
    this.textarea.value = this.value;
    this.uInput.emit(this.value);
  }
  render() {
    return (h(Host, null, h("div", { class: {
        wrapper: true,
        disabled: this.disabled,
        [`design-${this.design}`]: true,
        [`textarea-${this.size}`]: true
      } }, h("textarea", { ref: (ta) => (this.textarea = ta), required: this.required, readonly: this.readonly, disabled: this.disabled, value: this.value, class: {
        textarea: true,
        [`resize-${this.resize}`]: true
      }, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, rows: this.rows, cols: this.cols }), this.label ? (h("label", { class: {
        label: true,
        [`label-${this.size}`]: true,
        [`label-${this.design}`]: true,
        labeltop: !!this.value || this.focused
      } }, this.required ? `${this.label} *` : this.label)) : null, !this.readonly && !this.disabled && this.value ? (h("div", { onClick: this.resetValue, onTouchStart: this.resetValue, class: {
        reset: true
      } }, this.focused || this.value ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: this.size === 'small'
        ? 16
        : this.size === 'medium'
          ? 20
          : 24, height: this.size === 'small'
        ? 16
        : this.size === 'medium'
          ? 20
          : 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": this.size === 'small' ? 1 : this.size === 'medium' ? 1.5 : 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, h("path", { d: "M15 15L9 9m6 0l-6 6", class: this.focused ? 'text-red-500' : 'text-gray-500' }), h("circle", { cx: "12", cy: "12", r: "10", class: this.focused ? 'text-red-500' : 'text-gray-500' }))) : null)) : null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
UTextarea.style = uTextareaCss;

export { UTextarea as u_textarea };
