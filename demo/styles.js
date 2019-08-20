import { html } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-lumo-styles/color';

const template = html`
  <dom-module id="my-onboarding-styles" theme-for="vcf-onboarding">
    <template>
      <style>
        [part='step'] {
          min-width: 300px;
          width: 100%;
          height: 70vh;
          display: none;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: #fff;
        }
        [part='step'].active-step {
          display: flex;
				}
        [part='step-content'] {
          text-transform: uppercase;
        }
        [part='step-button'] {
          margin-top: 3em;
        }
				[part='step-indicators'] {
          margin: 1em 0.5em;
        }
        [part='step-indicator'] {
					background-color: var(--lumo-shade-30pct);
					border-radius: 0;
        }
        [part='step-indicator'].active-step {
          background-color: var(--lumo-success-color);
        }
      </style>
    </template>
  </dom-module>
`;

document.head.appendChild(template.content);
