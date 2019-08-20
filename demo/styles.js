import { html } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-lumo-styles/color';

const template = html`
  <dom-module id="my-onboarding-styles" theme-for="vcf-onboarding">
    <template>
      <style>
				[part='steps-container'] {
					margin: -10px;
				}
        [part='step'] {
          display: none;
        }
        [part='step'].active-step {
          display: block;
        }
        [part='step-content'] {
          min-width: 300px;
          width: 100%;
          height: 50vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: #fff;
        }
        [part='step-button'] {
          width: 100%;
          margin: 0.75rem 0;
        }
        [part='step-indicators'] {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        [part='step-indicator'] {
          width: 8px;
          height: 8px;
          margin: 0 5px;
          border-radius: 50%;
          background-color: var(--lumo-shade-30pct);
          display: inline-block;
          transition: all 0.25s;
          cursor: pointer;
        }
        [part='step-indicators'] .active-step {
          background-color: var(--lumo-primary-color);
          cursor: default;
        }
      </style>
    </template>
  </dom-module>
`;

document.head.appendChild(template.content);
