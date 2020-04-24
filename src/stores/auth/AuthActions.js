import axios from 'axios';
import Router from 'next/router';
import development from '../../environments/development';
import { removeCookie, setCookie } from '../../_helpers/cookie';
import { AUTHENTICATE, AUTHENTICATE_ERROR, DEAUTHENTICATE } from './AuthTypes';

// define environment and api route
const environment = development;
const api = environment.api.authentication;

export const authenticate = (user) => (dispatch) => {
	// header
	const config = {
		grant_type: 'password',
		client_id: 2,
		client_secret: process.env.CLIENT_SECRET_PASSWORD,
		username: user.email,
		password: user.password,
	};

	axios
		.post(api, config)
		.then((res) => {
			setCookie('token', res.data.access_token);
			Router.push('/home'); // #TODO: implement a different routing method??
			dispatch({ type: AUTHENTICATE, payload: res.data.access_token });
		})
		.catch((error) => {
			// #TODO: add error handling
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);

				// const err = error.response.data.errors
				// 	? error.response.data.errors.email[0]
				// 	: error.response.data.errors;
				// dispatch({ type: REGISTER_ERROR, payload: err });
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log('Error', error.message);
			}
			console.log(error.config);
			dispatch({ type: AUTHENTICATE_ERROR, payload: error.response });
		});
};

// gets token from the cookie and save it in the store
export const reauthenticate = (token) => (dispatch) => {
	dispatch({ type: AUTHENTICATE, payload: token });
};

// removes the token
export const deauthenticate = () => (dispatch) => {
	removeCookie('token');
	Router.push('/login');
	dispatch({ type: DEAUTHENTICATE });
};
