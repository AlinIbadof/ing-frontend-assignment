import { LitElement, html, css } from 'lit';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-button.js';

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

    lion-button {
      margin-top: 0.5rem;
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

  _handleSubmit(e) {
    e.preventDefault();
    const username = this.username?.trim();
    const password = this.password?.trim();

    if (!username || !password) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    if (this.isRegisterScreen) {
      localStorage.setItem('user', JSON.stringify({ username }));
      this.errorMessage = '';
      this.isLoggedIn = true;
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.username === username) {
        this.errorMessage = '';
        this.isLoggedIn = true;
      } else {
        this.errorMessage = 'Invalid username or password.';
      }
    }
  }

  _handleLogout() {
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
  }

  render() {
    return html`
      <main>
        ${this.isLoggedIn
          ? html`<h3>Welcome, ${this.username}</h3>
              <lion-button @click="${this._handleLogout}">Logout</lion-button>`
          : html`<h3>Authentication</h3>
              <p>
                ${this.isRegisterScreen
                  ? 'Please register to continue'
                  : 'Please login to continue'}
              </p>
              <form>
                <lion-input
                  label="Username"
                  type="text"
                  @model-value-changed="${e => {
                    this.username = e.target.modelValue;
                  }}"
                ></lion-input>
                <lion-input
                  label="Password"
                  name="password"
                  type="password"
                  @model-value-changed="${e => {
                    this.password = e.target.modelValue;
                  }}"
                ></lion-input>
                <lion-button @click="${this._handleSubmit}">Submit</lion-button>
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
              <p>${this.errorMessage}</p>`}
      </main>
    `;
  }
}

customElements.define('app-authentication', Authentication);
