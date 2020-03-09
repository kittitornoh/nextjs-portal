import axios from "axios";
import Router from "next/router";
import development from "../../environments/development";
import { REQUEST_AUTH, REQUEST_AUTH_FINISHED } from "./AuthTypes";

// define environment and api route
const environment = development;
const api = environment.api.authentication;

export const requestAuth = credentials => dispatch => {
  // header
  const config = {
    grant_type: process.env.REACT_APP_GRANT_TYPE,
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: environment.token.auth,
    username: credentials.username,
    password: credentials.password
  };

  dispatch({ type: REQUEST_AUTH });

  axios
    .post(api, config)
    .then(res => {
      dispatch({ type: REQUEST_AUTH_FINISHED, payload: res.data.access_token });
      Router.push("/home"); // direct to home page
    })
    .catch(err => console.error(err));
};
