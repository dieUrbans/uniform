import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-loader',
  styleUrl: 'u-loader.css',
  shadow: true,
})
export class ULoader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
