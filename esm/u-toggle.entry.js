import { r as registerInstance, h, H as Host } from './index-4f6a2e7b.js';

const uToggleCss = ":host{display:block}";

let UToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
UToggle.style = uToggleCss;

export { UToggle as u_toggle };
