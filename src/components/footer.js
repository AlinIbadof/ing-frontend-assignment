import { LitElement, html, css } from 'lit';

class Footer extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      background: linear-gradient(to top, #2c0a4c, #450d80);
      position: absolute;
      bottom: 0;
      height: 50px;
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  constructor() {
    super();
    this.footer = 'Created by: <a href="">Alin</a>';
  }

  render() {
    return html`
      <footer>
        Created by
        <a
          href="https://github.com/AlinIbadof/ing-frontend-assignment"
          alt="link to github repo"
          target="_blank"
          rel="noopener noreferrer"
          >@ Alin Ibadof</a
        >
      </footer>
    `;
  }
}

customElements.define('app-footer', Footer);
