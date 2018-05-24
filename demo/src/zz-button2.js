import {LitElement, html} from '@polymer/lit-element';

export class ZzButtonn extends LitElement {
  static get properties() {
    return {
      label: String
    };
  }

  _render({ label }) {
    return html`<p>zz button2</p>`;
  }
}

customElements.define('zz-buttonn', ZzButtonn);
