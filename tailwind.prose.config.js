const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Add prose-lg, prose-slate, or any other class to this div to include its css.
    { raw: '<div class="prose">', extension: 'html' }
  ],
  safelist:[],
  corePlugins: {
    preflight: false,
  },
  theme: { extend: {} },
  variants: {

  },
  plugins: [require('@tailwindcss/typography')],
};

