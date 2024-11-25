import { LitElement, html, css } from 'lit';

class Footer extends LitElement {
  static styles = css`
    :host {
      width: 100%;
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
