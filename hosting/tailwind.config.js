/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [/group/, /hover/, /sse/],

  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      "dark-teal": "#006a75",
      "sse-red-lightest": "#fde2dc",
      "sse-red-lighter": "#f98e74",
      "sse-red": "#E00038",
      "sse-yellow-lightest": "#fdefd0",
      "sse-yellow-lighter": "#fbe0a2",
      "sse-yellow": "#F6B218",
      "grey-dark": "#425563",
      "sse-grey": "#F6F8FB",
      "sse-blue-lightest": "#609fff",
      "sse-blue-lighter": "#116fff",
      "sse-blue-ice": "#CCEAEE",
      "sse-blue": "#002D72",
      "sse-blue-dark": "#084885",
      "sse-teal-lightest": "#cdf7ff",
      "sse-teal-lighter": "#38e2ff",
      "sse-teal": "#006a75",
      "sse-baby-blue": "#AABDDA",
      "sse-green-lightest": "#e3f3f0",
      "sse-green-lighter": "#c7e6e1",
      "sse-green": "#73C3B4",
      "sse-bright-green": "#88c654",
      "sse-blue-pale": "#f2f4f8",
      "sse-heading-lighter": "#45777d",
      "sse-heading-darker": "#30494c",
      "sse-hyperlink": "#0097a9",
      "sse-white": "#FFFFFF",
      "sse-panel-grey": "#ecf0f4",
      "sse-light-grey": "#d3d3d3",
      "sse-porcelain": "#eceeef",
      "sse-light-green": "#A6DED6",
      yellow: colors.yellow,
      red: colors.red,
      blue: "#123282", // aka Primary Blue
      "light-blue": {
        60: "#c7d1de",
        20: "#ecf0f4",
      },
      teal: {
        20: "#0097a9",
        50: "#45777d",
        DEFAULT: "#006a75",
        80: "#30494c",
      }, // aka Dark Teal
      slate: {
        5: "#f6f7f7",
        30: "#c6ccd0",
        40: "#b3bbc1",
        80: "#687782",
        DEFAULT: "#425563",
      },
      grey: {
        DEFAULT: "#425563",
        80: "#687782",
        40: "#b3bbc1",
        5: "#f6f7f7",
      },
      amber: {
        60: "#fad176",
      },
      mint: {
        5: "#f8fcfc",
        10: "#f0faf8",
        20: "#e1f4f1",
        40: "#c4eae3",
        60: "#a6dfd6",
        DEFAULT: "#6bcaba",
      },
      white: "#fff",
      black: "#000",
      transparent: "transparent",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "1.5rem",
      },
    },
    fontFamily: {
      sans: ["MuseoSans", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      "2xs": ["10px", { lineHeight: "normal", letterSpacing: "0.8px" }],
      zero: [0],
      xs: ["13px", { lineHeight: "15px", letterSpacing: "0.8px" }],
      sm: ["15px", { lineHeight: "23px" }],
      base: ["17px", { lineHeight: "26px" }],
      xl: ["19px", { lineHeight: "26px" }],
      "2xl": ["21px", { lineHeight: "28px" }],
      "3xl": ["24px", { lineHeight: "29px" }],
      "4xl": ["26px", { lineHeight: "33px" }],
      "5xl": ["28px", { lineHeight: "33px" }],
      "6xl": ["30px", { lineHeight: "36px" }],
      "7xl": ["36px", { lineHeight: "42px" }],
      "8xl": ["40px", { lineHeight: "46px" }],
      "9xl": ["42px", { lineHeight: "49px" }],
      "10xl": ["50px", { lineHeight: "58px" }],
    },
    borderRadius: {
      none: "0",
      DEFAULT: "2px",
      3: "3px",
      8: "8px",
      12: "12px",
      20: "20px",
      30: "30px",
      40: "40px",
      80: "80px",
      100: "100px",
      full: "9999px",
    },
    extend: {
      padding: {
        0.7: "0.7rem",
        0.5: "0.5rem",
        0.9: "0.9rem",
        2.75: "0.6875rem", // 11px
        3.25: "0.8125rem", // 13px
        4.5: "1.125rem", // 18px
        5.5: "1.375rem", // 22px
        6.5: "1.625rem", // 26px
        7.5: "1.875rem", // 30px
        8.5: "2.125rem", // 34px
        18.5: "4.625rem", // 74px
        21: "5.25rem", // 84px
        26: "6.50rem", // 104px
        30: "7.5rem", // 120px
        34: "8.5rem", // 136px
        94: "23.5rem", // 400px
      },
      margin: {
        0.75: "0.1875rem", // 3px
        4.5: "1.125rem", // 18px
        "-4.5": "-1.125rem", //-18px
        5.5: "1.375rem", // 22px
        "-5.5": "-1.375rem", //-22px
        6.5: "1.625rem", // 26px
        "-6.5": "-1.625rem", // -26px
        7.5: "1.875rem", // 30px
        "-7.5": "-1.875rem", //-30px
        8.5: "2.125rem", // 34px
        "-8.5": "-2.215rem", // -34px
        11: "2.75rem", // 44px
        "-11": "-2.75rem", // -44px
        13: "3.25rem", // 52px
        "-13": "-3.25rem", // -52px
        15: "3.75rem", // 60px
        "-15": "-3.75rem", // -60px
        18: "4.5rem", // 72px
        "-18": "-4.5rem", // -72px
        26: "6.5rem", // 104 px
        "-26": "-6.5rem", // 104 px
        30: "7.5rem", // 120px
        "-30": "-7.5rem", // -120px
      },
      height: {
        8.5: "2.125rem", // 34px
        9: "2.25rem", // 36px
        9.5: "2.4375rem", // 39px
        12.5: "3.125rem", // 50px
        15: "3.75rem", // 60px
        18: "4.5rem", // 72px
        18.75: "4.6875rem", // 75px
        22.5: "5.6875rem", // 91px
        37: "9.25rem", // 148px
        46: "11.5rem", // 148px
        50: "12.5rem", // 200px
        62.5: "15.625rem", // 250px
        72.5: "18.125rem", //290px
        75: "18.75rem", // 300px
        85: "21.25rem", // 340px
        100: "25rem", // 400px
        113: "28.25rem", // 452px
        127: "31.75rem", // 508px
      },
      width: {
        0.25: "0.0625rem", //1px
        8.5: "2.125rem", // 34px
        9: "2.25rem", // 36px
        12.5: "3.125rem", // 50px
        71: "17.75rem", // 284px
        82.5: "20.625rem", // 330px
        110: "27rem",
        111: "27.8125rem", // 445px
        112: "55.1rem",
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      minHeight: {
        0: "0",
        25: "25rem",
        35: "35rem",
        50: "50rem",
        75: "75rem",
        full: "100%",
      },
      transitionProperty: {
        height: "height",
      },
      zIndex: {
        60: "60",
        100: "100",
        999: "999",
      },
      animation: {
        "spin-ring": "spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      padding: ["responsive"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    /**
     * Before and After Pseudo-Elements with Content
     * https://github.com/tailwindlabs/tailwindcss/discussions/2119#discussioncomment-200587
     */
    plugin(({ addVariant, e }) => {
      addVariant("before", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`;
        });
      });
      addVariant("after", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`;
        });
      });
    }),
    plugin(({ addUtilities }) => {
      const contentUtilities = {
        ".content": {
          content: "attr(data-content)",
        },
        ".content-before": {
          content: "attr(data-before)",
        },
        ".content-after": {
          content: "attr(data-after)",
        },
      };
      addUtilities(contentUtilities, ["before", "after"]);
    }),
  ],
};
