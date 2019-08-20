import { html } from '@polymer/polymer/polymer-element.js';

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
        [part='step-content'] {
          text-transform: uppercase;
        }
        [part='step-button'] {
          margin-top: 3em;
        }
        .active-step {
          display: flex;
        }
      </style>
    </template>
  </dom-module>
`;

document.head.appendChild(template.content);
