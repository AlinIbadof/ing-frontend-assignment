import { LitElement, html, css } from 'lit';

class Header extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      background-color: grey;
      height: 50px;

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
