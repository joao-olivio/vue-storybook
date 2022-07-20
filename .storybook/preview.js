import { statuses as statusPluginParameters } from "./statusPlugin.config";
import "../src/assets/style/entry.scss"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  status: {
    statuses: {
      ...statusPluginParameters,
    },
  },
};
