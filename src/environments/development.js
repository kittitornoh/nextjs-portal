/*
 * The development environment.
 */
import environment from "./base";

const baseApi = process.env.REACT_APP_BASE_API;
const env = environment(baseApi);

const developmentEnv = {
  ...env,
  // override anything that gets added from base
  token: {
    ...env.token,
    auth: process.env.REACT_APP_CLIENT_SECRET
  },
  isProduction: false,
  isDevelopment: true
};

export default developmentEnv;
