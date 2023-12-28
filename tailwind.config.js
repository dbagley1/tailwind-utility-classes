/** @type {import('tailwindcss').Config} */

let breakPoints = ['sm', 'lg'];
// breakPoints = [];
function p(pattern, variants) { return { pattern, variants }; }
function bp(pattern, addVariants) { return p(pattern, [...breakPoints, addVariants]); };

export default {
  content: [
    // { raw: '<div class="prose">', extension: 'html' }
  ],
  safelist: [
    bp(/^(hidden|flex|block|grid)$/),
    p(/flex-/),
    bp(/^(justify|items)-[^-]+$/),
    bp(/^grid-(cols|rows)-(1|2|3|4|5|6|7|8)$/),
    bp(/^w-\d+\/(12|5)$/),
    bp(/^max-w-(none|full)$/),
    ...[150, 300, 450, 600].flatMap(x => breakPoints.map(bp => `${bp}:max-w-[${x}px]`)),
    bp(/auto-cols-(min|max|fr|auto)/),
    bp(/^text-(xs|sm|base|md|lg|xl|\dxl|left|right|center)$/),
    p(/^font-/),
    p(/^object-/, ['hover']),
    bp(/^bg-((no|left|right)-)\w+$/),
    bp(/^bg-(auto|cover|contain)$/),
    bp(/^(w|h)-full$/),
    p(/line-clamp-/),
    bp(/aspect-/),
    bp(/^(m|p)-0$/),
    p(/^(no-)?(under|over)?line(-through)?$/),
    p(/^(uppercase|lowercase|capitalize|normal-case)$/),
    p(/^list-(none|disc|decimal)$/),
    p(/text-(balance|pretty)/),
    p(/italic/)
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        mono: "var(--font-mono)"
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

