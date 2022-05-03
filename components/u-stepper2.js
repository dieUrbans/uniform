import { HTMLElement, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './u-button2.js';
import { d as defineCustomElement$2 } from './u-grid2.js';
import { d as defineCustomElement$1 } from './u-row2.js';

const uStepperCss = ":host{display:block;width:100%}.wrapper{border-radius:1rem;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:100%;padding:0px;position:relative;width:100%}.wrapper.vertical{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}.wrapper.horizontal{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.head{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity));display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-ms-flex-pack:distribute;-webkit-justify-content:space-around;justify-content:space-around;padding:0.5rem;grid-gap:0.5rem;gap:0.5rem}.head.vertical{border-top-left-radius:0.75rem;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.head.horizontal{border-top-left-radius:0.75rem;border-top-right-radius:0.75rem;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}.step{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;white-space:nowrap;grid-gap:0.25rem;gap:0.25rem}.no{--tw-bg-opacity:1;background-color:rgba(75, 85, 99, var(--tw-bg-opacity));border-radius:9999px;height:2rem;line-height:2rem;text-align:center;--tw-text-opacity:1;color:rgba(229, 231, 235, var(--tw-text-opacity));vertical-align:middle;width:2rem}.label{padding-top:0.25rem;padding-bottom:0.25rem;--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.row{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}.footer{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem}.footer.vertical{border-bottom-right-radius:0.75rem;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.footer.horizontal{border-bottom-right-radius:0.75rem;border-bottom-left-radius:0.75rem;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.x{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity));border-bottom-left-radius:0.75rem}.content{background-color:transparent;--tw-border-opacity:1;border-color:rgba(229, 231, 235, var(--tw-border-opacity));border-style:solid;border-width:2px;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;width:100%}.content.vertical{border-top-right-radius:0.75rem}.activeStep>.no{--tw-bg-opacity:1;background-color:rgba(147, 197, 253, var(--tw-bg-opacity));font-weight:600;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.activeStep>.no:hover{--tw-bg-opacity:1;background-color:rgba(239, 246, 255, var(--tw-bg-opacity));--tw-shadow-color:rgba(219, 234, 254, 1);--tw-shadow:var(--tw-shadow-colored);--tw-text-opacity:1;color:rgba(37, 99, 235, var(--tw-text-opacity))}.activeStep>.label{font-weight:600;--tw-text-opacity:1;color:rgba(37, 99, 235, var(--tw-text-opacity))}.visible{visibility:visible}.hidden{display:none}.line{--tw-bg-opacity:1;background-color:rgba(156, 163, 175, var(--tw-bg-opacity));-webkit-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;flex-grow:1;height:0.125rem;width:100%}.doneLine{--tw-bg-opacity:1 !important;background-color:rgba(59, 130, 246, var(--tw-bg-opacity)) !important}";

let UStepper = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.uSubmit = createEvent(this, "uSubmit", 7);
    this.uStep = createEvent(this, "uStep", 7);
    /**
     * define steps -
     * without label -> steps: 3,
     * with label -> steps: [1,'2',3],
     * both do the same, but with array you can define the label
     */
    this.steps = ['Step1', 'Step2', 'Step3'];
    /**
     * disabled state of the submit button
     */
    this.allData = true;
    /**
     * disabled state of the next step button
     */
    this.nextStepAvailable = true;
    /**
     * label of the previous step button
     */
    this.prevLabel = 'previous';
    /**
     * label of the next step button
     */
    this.nextLabel = 'next';
    /**
     * label of the next step button
     */
    this.submitLabel = 'submit';
    /**
     * decide the alignment of the stepper
     */
    this.alignment = 'horizontal';
    this.currentStep = 0;
    this.handleSubmit = () => {
      this.uSubmit.emit();
    };
    this.handleNextStep = () => {
      this.currentStep += 1;
      this.uStep.emit(this.currentStep + 1);
    };
    this.handlePreviousStep = () => {
      this.currentStep -= 1;
      this.uStep.emit(this.currentStep);
    };
  }
  formatSteps() {
    if (typeof this.steps === 'number') {
      this.steps = [...Array(this.steps).keys()];
    }
    return this.steps;
  }
  render() {
    const steps = this.formatSteps();
    const layout = () => {
      if (this.alignment === 'horizontal')
        return {
          columns: 1,
          rows: ['3rem', '1fr', '2rem'],
          area: [['header'], ['content'], ['footer']]
        };
      if (this.alignment === 'vertical')
        return {
          columns: ['6rem', '1fr'],
          rows: ['1fr', '2rem'],
          // columns: 2,
          // rows: 2,
          area: [
            ['header', 'content'],
            ['x', 'footer']
          ]
        };
    };
    return (h(Host, null, h("u-grid", Object.assign({}, layout(), { width: "100%", height: "100%" }), h("div", { class: {
        head: true,
        [this.alignment]: true
      }, style: {
        gridArea: 'header'
      } }, steps.map((step, index) => {
      if (this.alignment === 'horizontal')
        return [
          h("u-row", { width: "content" }, h("div", { class: {
              step: true,
              activeStep: index === this.currentStep
            } }, h("span", { class: {
              no: true,
              activeStep: index === this.currentStep
            } }, index + 1), typeof step === 'string' && (h("span", { class: "label" }, step)))),
          index < steps.length - 1 && (h("div", { class: {
              line: true,
              doneLine: index < this.currentStep
            } }))
        ];
      if (this.alignment === 'vertical')
        return [
          h("div", { class: {
              step: true,
              activeStep: index === this.currentStep
            } }, h("span", { class: {
              no: true,
              activeStep: index === this.currentStep
            } }, index + 1), typeof step === 'string' && (h("span", { class: "label" }, step)))
        ];
      return null;
    })), h("div", { class: {
        content: true,
        [this.alignment]: true
      }, style: {
        gridArea: 'content'
      } }, steps.map((_, index) => (h("div", { class: {
        visible: index === this.currentStep,
        hidden: index !== this.currentStep
      } }, h("slot", { name: `step-${index + 1}` }, "keine Daten in dem Slot"))))), h("div", { class: {
        footer: true,
        [this.alignment]: true
      }, style: {
        gridArea: 'footer'
      } }, h("u-button", { design: "error", flat: true, disabled: this.currentStep === 0, onUClick: this.handlePreviousStep }, this.prevLabel, h("span", { slot: "prefix" }, "\u00AB")), this.currentStep < steps.length - 1 ? (h("u-button", { design: "success", flat: true, disabled: this.currentStep === steps.length - 1 ||
        !this.nextStepAvailable, onClick: this.handleNextStep }, this.nextLabel, h("span", { slot: "suffix" }, "\u00BB"))) : (h("u-button", { design: "success", flat: true, disabled: !this.allData, onUClick: this.handleSubmit }, this.submitLabel))), this.alignment === 'vertical' && (h("div", { class: "x", style: {
        gridArea: 'x'
      } })))));
  }
  static get style() { return uStepperCss; }
};
UStepper = /*@__PURE__*/ proxyCustomElement(UStepper, [1, "u-stepper", {
    "steps": [2],
    "allData": [4, "all-data"],
    "nextStepAvailable": [4, "next-step-available"],
    "prevLabel": [1, "prev-label"],
    "nextLabel": [1, "next-label"],
    "submitLabel": [1, "submit-label"],
    "alignment": [1],
    "currentStep": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-stepper", "u-button", "u-grid", "u-row"];
  components.forEach(tagName => { switch (tagName) {
    case "u-stepper":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UStepper);
      }
      break;
    case "u-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "u-grid":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "u-row":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { UStepper as U, defineCustomElement as d };
