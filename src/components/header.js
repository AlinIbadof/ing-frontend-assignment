import { LitElement, html, css } from 'lit';

class Header extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      background: linear-gradient(to bottom, #2c0a4c, #450d80);
      height: 50px;
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  constructor() {
    super();
    this.header = 'Frontend Assignment @ ING Hubs';
  }

  render() {
    return html` <header>${this.header}</header> `;
  }
}

customElements.define('app-header', Header);
