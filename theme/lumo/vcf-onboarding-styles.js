import { html } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-lumo-styles/color';

const template = html`
  <dom-module id="my-dialog-overlay-styles" theme-for="vaadin-dialog-overlay">
    <template>
      <style>
        [part='content'] {
          padding: 0;
          height: 100%;
        }
      </style>
    </template>
  </dom-module>
`;

document.head.appendChild(template.content);
