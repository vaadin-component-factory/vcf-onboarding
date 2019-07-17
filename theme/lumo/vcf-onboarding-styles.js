const theme = document.createElement('dom-module');
theme.id = 'vcf-onboarding-lumo';
theme.setAttribute('theme-for', 'vcf-onboarding');
theme.innerHTML = `
    <template>
      <style>
        :host {}
      </style>
    </template>
  `;
theme.register(theme.id);
