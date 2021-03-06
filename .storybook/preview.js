import { statuses as statusPluginParameters } from "./statusPlugin.config";

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
