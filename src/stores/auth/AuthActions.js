import axios from "axios";
import Router from "next/router";
import development from "../../environments/development";
import { getCookie, removeCookie, setCookie } from "../../_helpers/cookie";
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
    .catch(err => console.error(err));
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

// checks if the page is being loaded on the server, and if so, get auth token from the cookie
export const checkServerSideCookie = ctx => {
  const login = "/login?redirect=true"; // #TODO: query params for debugging
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      const token = getCookie("token", ctx.req);
      // redirect if there is no cookie
      if (!token) {
        ctx.res.writeHead(302, {
          Location: login
        });
        ctx.res.end();
      } else {
        ctx.store.dispatch(reauthenticate(token));
      }
    }
  } else {
    const token = ctx.store.getState().auth.token;

    // redirect if there is no cookie
    if (!token && (ctx.pathname !== "/login" || ctx.pathname !== "/signup")) {
      Router.push(login);
    }
  }
};
