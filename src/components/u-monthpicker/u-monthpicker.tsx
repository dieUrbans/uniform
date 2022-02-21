import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-monthpicker',
  styleUrl: 'u-monthpicker.css',
  shadow: true,
})
export class UMonthpicker {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
