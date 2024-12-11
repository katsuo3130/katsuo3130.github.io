// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createApp } from 'vue'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#0F172A',
        surface: '#1E293B',
        primary: '#6200EE',
        secondary: '#03DAC6',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // theme: {
        //     defaultTheme: 'myCustomLightTheme',
        //     themes: {
        //         myCustomLightTheme,
        //     },
        // },
        // ... your configuration
    })
    app.vueApp.use(vuetify)
})