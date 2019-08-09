import { html } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-lumo-styles/color';
import '@vaadin/vaadin-lumo-styles/spacing';
import '@vaadin/vaadin-lumo-styles/sizing';
import '@vaadin/vaadin-lumo-styles/style';
import '@vaadin/vaadin-lumo-styles/typography';

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
  <dom-module id="vcf-onboarding-lumo" theme-for="vcf-onboarding">
    <template>
      <style>
        
      </style>
    </template>
  </dom-module>
`;

document.head.appendChild(template.content);
