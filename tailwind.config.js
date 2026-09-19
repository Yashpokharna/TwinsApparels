/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces — warm off-white, not pure white. Pure #fff under a large
        // display face reads clinical and glares on an OLED phone.
        paper: "#F4F1EC",
        "paper-raised": "#EBE7E0",
        "paper-soft": "#E0DBD2",
        // Type. Every value below is >= 4.5:1 on `paper`, including the
        // faintest one, which is used for 10px uppercase labels.
        ink: "#14110E",
        "ink-dim": "#55504A",
        "ink-faint": "#6F695F",
        // Single brand accent — change this one value to re-skin the site.
        // 4.8:1 on paper, so it is safe for body-sized text.
        clay: "#B04A2C",
        "clay-soft": "#C97A5C",
        sand: "#C9BCA7",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // Slash opacities used across the site. JIT accepts any value in a
      // class attribute, but `@apply` only resolves values that exist in this
      // scale — so the intermediate steps have to be declared here.
      opacity: {
        3: "0.03",
        7: "0.07",
        8: "0.08",
        12: "0.12",
        15: "0.15",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      letterSpacing: {
        tightest: "-0.055em",
        label: "0.22em",
      },
      fontSize: {
        label: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.22em" }],
      },
      maxWidth: {
        shell: "1560px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" },
        },
      },
      animation: {
        marquee: "marquee 52s linear infinite",
      },
    },
  },
  plugins: [],
};
