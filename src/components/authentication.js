import { LitElement, html, css } from 'lit';
import '@lion/ui/define/lion-input.js';

class Authentication extends LitElement {
  static styles = css``;

  static properties = {};

  render() {
    return html`
      <main>
        <form>
          <lion-input label="Username" type="text"></lion-input>
          <lion-input label="Password" type="password"></lion-input>
        </form>
      </main>
    `;
  }
}

customElements.define('app-authentication', Authentication);
