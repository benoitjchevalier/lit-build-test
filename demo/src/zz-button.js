import {LitElement, html} from '@polymer/lit-element';

export class ZzButton extends LitElement {
  static get properties() {
    return {
      label: String
    };
  }

  _render({ label }) {
    return html`<p>${label}</p>`;
  }
}

customElements.define('zz-button', ZzButton);
