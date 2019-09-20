import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { Color } from '../../interface';
import { createColorClasses, hostContext } from '../../utils/theme';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-card-title',
  styleUrls: {
    ios: 'card-title.ios.scss',
    md: 'card-title.md.scss'
  },
  shadow: true
})
export class CardTitle implements ComponentInterface {

  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  render() {
    const mode = getIonMode(this);
    return (
      <Host
        role="heading"
        aria-level="2"
        class={{
          ...createColorClasses(this.color),
          'in-card-ion-color': hostContext('ion-card[color]', this.el),
          [mode]: true
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
