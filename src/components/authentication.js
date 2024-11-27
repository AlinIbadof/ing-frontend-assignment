import { LitElement, html, css } from 'lit';
import '@lion/ui/define/lion-input.js';

class Authentication extends LitElement {
  static styles = css`
    :host {
      max-width: 80%;
    }
    main {
      padding: 1rem;
      margin-top: 1rem;
      border-radius: 12px;
      background-color: #3a2c54;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .toggle {
      cursor: pointer;
      font-family: inherit;
      font-size: inherit;
      border: none;
      background-color: transparent;
      color: inherit;
      text-decoration: underline;
      padding: 0;
    }
  `;

  static properties = {};

  render() {
    return html`
      <main>
        <h3>Authentication</h3>
        <p>Please login to continue</p>
        <form>
          <lion-input label="Username" type="text"></lion-input>
          <lion-input label="Password" type="password"></lion-input>
        </form>
        <p>
          Don't have an account? Click <button class="toggle">here</button> to
          register.
        </p>
        <p></p>
      </main>
    `;
  }
}

customElements.define('app-authentication', Authentication);
