const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')  // Importa la configuración base

// Configuraciones específicas para QA
const e2eOverride = {
    baseUrl: 'https://staging-env/fashionhub',
}
const envOverride = {
    MY_USER: 'demouser',
    MY_PASSWORD: 'fashion123',
}

module.exports = defineConfig({
    ...baseConfig,  // Hereda configuraciones del archivo base
    e2e: {
        ...baseConfig.e2e,
        ...e2eOverride,  // Sobrescribe la URL base para QA
    },
    env: {
        ...baseConfig.env,
        ...envOverride,  // Sobrescribe las credenciales para QA
    },
})