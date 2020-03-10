import axios from "axios";
//import Router from "next/router";
import development from "../../environments/development";
import { AUTHENTICATE } from "./authTypes";

// define environment and api route
const environment = development;
const api = environment.api.authentication;

export const authenticate = user => dispatch => {
  console.log("START");
  // header
  const config = {
    grant_type: process.env.GRANT_TYPE,
    client_id: process.env.CLIENT_ID,
    client_secret: environment.token.auth,
    username: user.email,
    password: user.password
  };

  console.log(config);

  axios
    .post(api, config)
    .then(res => {
      console.log(res);
      dispatch({ type: AUTHENTICATE, payload: res.data.access_token });
      //Router.push("/home"); // direct to home page
    })
    .catch(err => console.error(err));
};
