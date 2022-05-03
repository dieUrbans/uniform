import { r as registerInstance, h, H as Host, g as getElement } from './index-ac0beabc.js';

const uCollapsibleGroupCss = ":host{display:block;width:100%}";

let UCollapsibleGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * if true, only one collapsible can be open at a time
     */
    this.onlyOneOpen = true;
  }
  componentDidRender() {
    const children = Array.from(this.el.children);
    for (let index = 0, len = children.length; index < len; index += 1) {
      const element = children[index];
      const el = element.shadowRoot.childNodes[1];
      if (index === 0)
        el.classList.add('topradius');
      if (index > 0 && index < len - 1)
        el.classList.add('noradius');
      if (index === len - 1)
        el.classList.add('botradius');
      element.addEventListener('uOpen', () => {
        this.closeInactive(element, children);
      });
    }
  }
  closeInactive(element, children) {
    if (this.onlyOneOpen) {
      for (let index = 0, len = children.length; index < len; index += 1) {
        const actEl = children[index];
        if (element !== actEl)
          actEl.closeCollapsible();
      }
    }
  }
  render() {
    return (h(Host, { role: "group" }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
UCollapsibleGroup.style = uCollapsibleGroupCss;

export { UCollapsibleGroup as u_collapsible_group };
