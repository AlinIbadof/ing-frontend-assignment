import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/app.js';

describe('Authentication', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<app-authentication></app-authentication>`);
  });

  it('renders the main section', () => {
    const main = element.shadowRoot.querySelector('main');
    expect(main).to.exist;
  });

  it('toggles to the register screen', async () => {
    const toggleButton = element.shadowRoot.querySelector('.toggle');
    toggleButton.click();
    await element.updateComplete;

    const formText = element.shadowRoot.querySelector('p').textContent.trim();
    expect(formText).to.include('Please register to continue');
  });

  it('displays an error if fields are empty on submit', async () => {
    const toggleButton = element.shadowRoot.querySelector('.toggle');
    toggleButton.click();
    await element.updateComplete;

    const submitButton = element.shadowRoot.querySelector('lion-button');
    submitButton.click();
    await element.updateComplete;

    const errorMessage = element.shadowRoot.querySelector('p:last-of-type');
    expect(errorMessage.textContent.trim()).to.equal(
      'All fields are required.',
    );
  });

  it('displays an error if terms are not agreed to on registration', async () => {
    const toggleButton = element.shadowRoot.querySelector('.toggle');
    toggleButton.click();
    await element.updateComplete;

    const usernameInput = element.shadowRoot.querySelector(
      'lion-input[label="Username"]',
    );
    usernameInput.modelValue = 'testuser';

    const passwordInput = element.shadowRoot.querySelector(
      'lion-input[label="Password"]',
    );
    passwordInput.modelValue = 'password123';

    const submitButton = element.shadowRoot.querySelector('lion-button');
    submitButton.click();
    await element.updateComplete;

    const errorMessage = element.shadowRoot.querySelector('p:last-of-type');
    expect(errorMessage.textContent.trim()).to.equal('Please agree to terms');
  });
});
