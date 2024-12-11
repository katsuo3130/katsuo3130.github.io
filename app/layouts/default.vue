<template>
    <v-app id="inspire">
        <v-app-bar flat density="compact">
            <v-container class="d-flex align-center justify-center">
                <v-tabs centered>
                    <v-tab v-for="link in links" :key="link" :text="link"></v-tab>
                </v-tabs>
            </v-container>
        </v-app-bar>

        <v-main>
            <v-container>
                <slot />
            </v-container>
        </v-main>
        <v-footer app>
            <span>&copy; {{ new Date().getFullYear() }} {{ title }}</span>
        </v-footer>
    </v-app>
</template>

<script setup>
const links = [
    'tab1',
    'tab2',
    'tab3',
    'tab4',
]

const title = 'いかり印'
</script>