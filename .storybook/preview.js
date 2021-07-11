import { themes } from "@storybook/theming";
import "../src/App.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "#333333" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "#FFFFFF" },
  },
};
