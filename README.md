# &lt;vcf-onboarding&gt;

## Demo

https://vcf-onboarding.netlify.com/

## Installation

Install `vcf-onboarding`:

```sh
npm i @vaadin-component-factory/vcf-onboarding --save
```

## Usage

Once installed, import it in your application:

```js
import '@vaadin-component-factory/vcf-onboarding/vcf-onboarding.js';
```

And use it:

```html
<vcf-onboarding>
  <div onboarding-step button-text="Next Step">
    <h1>First Step</h1>
  </div>
  <div onboarding-step button-text="Next Step">
    <h1>Second Step</h1>
  </div>
  <div onboarding-step button-text="Finish!">
    <h1>Third Step</h1>
  </div>
</vcf-onboarding>
```

Wrap the content of each step in an element with `onboarding-step` attribute and add the button text in `button-text` attribute of the element.

### Styling

The following selectors are available for styling:

- `[part='steps-container']`: The element that wraps all the steps.
- `[part='step']`: The element that wraps the contents and the button of each step.
- `[part='step-content']`: The element that wraps the contents of each step.
- `[part='onboarding-footer']`: The element that wraps the buttons and steps indicators.
- `[part='step-button']`: The button of each step.
- `[part='step-indicators']`: The element that wraps step indicators.
- `[part='step-indicator']`: The step indicator element.

### How to provide styles of the content:

Create a `dom-module` element like the following example and add your styles:

```html
<dom-module id="my-onboarding-styles" theme-for="vcf-onboarding">
  <template>
    <style>
      [part='steps-container'] {
      }
      [part='step'] {
      }
      [part='step'].active {
      }
      [part='step-content'] {
      }
      [part='onboarding-footer'] {
      }
      [part='step-button'] {
      }
      [part='step-button'].active {
      }
      [part='step-indicators'] {
      }
      [part='step-indicator'] {
      }
      [part='step-indicator'].active {
      }
    </style>
  </template>
</dom-module>
```

_Refer to [demos](https://vcf-onboarding.netlify.com/) for a real-world example._

**Note that after the user has gone through all the steps, the onboarding dialog will not show again in future visits.**

## Running demo

1. Fork the `vcf-onboarding` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vcf-onboarding` directory, run `npm install` to install dependencies.

1. Run `npm start` to open the demo.

## Contributing

To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.

## License

Commercial Vaadin Add-on License version 3 (CVALv3). For license terms, see LICENSE.

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
