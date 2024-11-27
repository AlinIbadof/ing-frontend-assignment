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

  static properties = {
    isLoggedIn: { type: Boolean },
    isRegisterScreen: { type: Boolean },
    username: { type: String },
    errorMessage: { type: String },
  };

  constructor() {
    super();
    this.isLoggedIn = false;
    this.isRegisterScreen = false;
    this.username = '';
    this.errorMessage = '';
  }

  _toggleRegister() {
    this.isRegisterScreen = !this.isRegisterScreen;
    this.errorMessage = '';
  }

  render() {
    return html`
      <main>
        <h3>Authentication</h3>
        <p>
          ${this.isRegisterScreen
            ? 'Please register to continue'
            : 'Please login to continue'}
        </p>
        <form>
          <lion-input label="Username" type="text"></lion-input>
          <lion-input label="Password" type="password"></lion-input>
        </form>
        <p>
          ${this.isRegisterScreen
            ? html`
                Already have an account? Click
                <button class="toggle" @click="${this._toggleRegister}">
                  here
                </button>
                to login.
              `
            : html`
                Don't have an account? Click
                <button class="toggle" @click="${this._toggleRegister}">
                  here
                </button>
                to register.
              `}
        </p>
        <p></p>
      </main>
    `;
  }
}

customElements.define('app-authentication', Authentication);
