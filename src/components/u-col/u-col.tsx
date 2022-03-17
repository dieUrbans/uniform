import { Component, Host, h, Prop } from '@stencil/core';

/**
 * @name Column
 * @state 🟢
 * @description Flexbox column
 * @categorie Layout
 */
@Component({
  tag: 'u-col',
  styleUrl: 'u-col.css',
  shadow: true
})
export class UCol {
  /**
   * flex align-items: start | center | end | space-between | space-around | space-evenly
   */
  @Prop() align:
    | 'start'
    | 'center'
    | 'end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly' = 'start';

  /**
   * flex justify-content: flex-start | flex-end | center | baseline | stretch
   */
  @Prop() justify: 'start' | 'center' | 'end' | 'stretch' = 'center';

  /**
   * flex wrap: nowrap | wrap | wrap-reverse
   */
  @Prop() wrap: 'nowrap' | 'wrap' | 'wrap-reverse' = 'wrap';

  /**
   * flex gap: string, e.g. '1rem', '1px'
   */
  @Prop() gap: string = '1em';

  /**
   * padding bottom and top: string, e.g. '1rem', '1px'
   */
  @Prop() padding: string = '0';

  /**
   * used with w-grid, set size based on number of columns on w-grid (default is 12)
   */
  @Prop() size: number = 12;

  /**
   * use with w-grid to set area
   */
  @Prop() area?: string = '';

  render() {
    return (
      <Host
        class="col"
        style={{
          alignItems: this.align,
          justifyContent: this.justify,
          flexWrap: this.wrap,
          gap: this.gap,
          padding: `${this.padding}`,
          gridArea: this.area
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
