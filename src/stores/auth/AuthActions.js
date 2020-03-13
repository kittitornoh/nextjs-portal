import axios from "axios";
import Router from "next/router";
import development from "../../environments/development";
import { removeCookie, setCookie } from "../../_helpers/cookie";
import { AUTHENTICATE, DEAUTHENTICATE } from "./authTypes";

// define environment and api route
const environment = development;
const api = environment.api.authentication;

export const authenticate = user => dispatch => {
  // header
  const config = {
    grant_type: process.env.GRANT_TYPE,
    client_id: process.env.CLIENT_ID,
    client_secret: environment.token.auth,
    username: user.email,
    password: user.password
  };

  axios
    .post(api, config)
    .then(res => {
      setCookie("token", res.data.access_token);
      Router.push("/home");
      dispatch({ type: AUTHENTICATE, payload: res.data.access_token });
    })
    .catch(err => {
      throw new Error(err);
    });
};

// gets token from the cookie and save it in the store
export const reauthenticate = token => dispatch => {
  dispatch({ type: AUTHENTICATE, payload: token });
};

// removes the token
export const deauthenticate = () => dispatch => {
  removeCookie("token");
  Router.push("/login");
  dispatch({ type: DEAUTHENTICATE });
};
