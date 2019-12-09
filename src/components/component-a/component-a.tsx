import { Component, h } from '@stencil/core';

@Component ({
  tag: 'component-a',
  shadow: false,
})
export class ComponentA {
  render() {
    return <div><slot /></div>;
  }
}
