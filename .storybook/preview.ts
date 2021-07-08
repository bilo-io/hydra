import { configure, addDecorator } from "@storybook/react";
import "../src/App.scss";
// import "!style-loader!css-loader!sass-loader!../src/App.scss";


const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
