// import { configure, addDecorator } from "@storybook/react";
// import "../src/App.scss";
// import "!style-loader!css-loader!sass-loader!../src/App.scss";

// function loadStories() {
//   req.keys().forEach(req);
//   applyDefaultTheme();
// }

// configure(loadStories, module);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
