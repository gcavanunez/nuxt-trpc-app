import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['~/modules/trpc/module.ts'],
  trpc: {
    baseURL: 'http://localhost:3000', // defaults to http://localhost:3000
    endpoint: '/trpc', // defaults to /trpc
  },
  typescript: {
    strict: true, // required to make input/output types work
  },
  // plugins: ['~/plugins/vue-query.client.ts'],
});
