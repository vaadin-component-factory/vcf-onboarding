import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-button';

/**
 * The following selectors are available for styling:
 *
 * Selector | Description
 * ----------------|----------------
 * `[part='step-container']` | The element that wraps all the steps
 * `[part='step']` | The element that wraps the contents and the button of each step
 * `[part='step-content']` | The element that wraps the contents of each step
 * `[part='step-button']` | The button of each step
 * `.active-step` | The CSS class added to the current step the user is viewing
 *
 * How to provide styles of the steps:
 *  Create a `dom-module` element like the following example
 *
 * ```html
 * <dom-module id="my-onboarding-styles" theme-for="vcf-onboarding">
 *  <template>
 *    <style>
 *      [part='step'] {
 *        background-color: #fff;
 *      }
 *      [part='step-content'] {
 *        text-transform: uppercase;
 *      }
 *      [part='step-button'] {
 *        margin-top: 3em;
 *      }
 *      .active-step {
 *        display: flex;
 *      }
 *    </style>
 *  </template>
 * </dom-module>
 * ```
 *
 * How to provide content of the steps:
 *  Wrap the content of each step in an element with 'onboarding-step' attribute
 *  and add the button text in 'button-text' attribute of the element.
 *
 * ```html
 * <div onboarding-step button-text="Next Step">
 *   <h1>First Step</h1>
 * </div>
 * <div onboarding-step button-text="Next Step">
 *  <h1>Second Step</h1>
 * </div>
 * <div onboarding-step button-text="Finish!">
 *   <h1>Third Step</h1>
 * </div>
 * ```
 */
class VcfOnboarding extends ElementMixin(ThemableMixin(GestureEventListeners(PolymerElement))) {
  static get template() {
    return html`
      <vaadin-dialog id="onboarding-dialog" theme="full-screen-on-mobile" no-close-on-outside-click no-close-on-esc>
        <template>
          <div part="steps-container" on-track="handleTrack">
            <template is="dom-repeat" items="[[steps]]">
              <div part="step" class$="[[_getStepClasses(index, activeStep)]]">
                <div part="step-content" inner-h-t-m-l="[[item.innerHTML]]"></div>
                <vaadin-button part="step-button" theme="success primary" on-click="nextStep"
                  >[[_getButtonText(item)]]</vaadin-button
                >
              </div>
            </template>
          </div>
        </template>
      </vaadin-dialog>
    `;
  }

  static get is() {
    return 'vcf-onboarding';
  }

  static get version() {
    return '0.2.0';
  }

  static get properties() {
    return {
      steps: {
        type: Array,
        value: () => []
      },
      buttons: {
        type: Array,
        value: () => []
      },
      activeStep: {
        type: Number,
        value: 0
      }
    };
  }

  ready() {
    super.ready();

    if (!localStorage.getItem('vcf-onboarding')) {
      this.openDialog();
    }

    const stepElements = this.querySelectorAll('[onboarding-step]');
    this.steps = [...stepElements];

    this.innerHTML = '';
  }

  _getStepClasses(i, activeStep) {
    if (i === activeStep) {
      return 'active-step';
    }
    return '';
  }

  _getButtonText(step) {
    return step.getAttribute('button-text');
  }

  nextStep() {
    if (this.activeStep < this.steps.length - 1) {
      this.activeStep += 1;
    } else {
      this.closeDialog();
    }
  }

  openDialog() {
    this.$['onboarding-dialog'].opened = true;
  }

  closeDialog() {
    this.$['onboarding-dialog'].opened = false;
    localStorage.setItem('vcf-onboarding', 'visited');
  }

  handleTrack(e) {
    switch (e.detail.state) {
      case 'start':
        this.trackStart = {
          x: e.detail.x,
          y: e.detail.y
        };
        break;
      case 'end':
        if (this.trackStart) {
          const deltaX = e.detail.x - this.trackStart.x;
          const deltaY = e.detail.y - this.trackStart.y;

          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0 && this.activeStep > 1) {
              this.activeStep = this.activeStep - 1;
            } else if (deltaX < 0 && this.activeStep < 3) {
              this.activeStep = this.activeStep + 1;
            }
          }

          this.trackStart = undefined;
        }
        break;
    }
  }
}

customElements.define(VcfOnboarding.is, VcfOnboarding);

/**
 * @namespace Vaadin
 */
window.Vaadin.VcfOnboarding = VcfOnboarding;

if (window.Vaadin.runIfDevelopmentMode) {
  window.Vaadin.runIfDevelopmentMode('vaadin-license-checker', VcfOnboarding);
}
