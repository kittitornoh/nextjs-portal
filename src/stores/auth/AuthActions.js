import axios from 'axios';
import Router from 'next/router';
import development from '../../environments/development';
import { removeCookie, setCookie } from '../../_helpers/cookie';
import {
	AUTHENTICATE,
	AUTHENTICATE_ERROR,
	DEAUTHENTICATE,
	CLIENT_AUTHENTICATE,
	CLIENT_DEAUTHENTICATE,
	CLIENT_AUTHENTICATE_ERROR,
} from './AuthTypes';

// define environment and api route
const environment = development;
const api = environment.api;

export const authenticateClient = () => (dispatch) => {
	dispatch(deauthenticateClient());

	const config = {
		grant_type: 'client_credentials',
		client_id: 1,
		client_secret: process.env.CLIENT_SECRET_CLIENT_CRED,
	};

	axios
		.post(api.authentication, config)
		.then((res) => {
			setCookie('client_token', res.data.access_token);
			Router.push('/covid19/assessment');
			dispatch({ type: CLIENT_AUTHENTICATE, payload: res.data.access_token });
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
			dispatch({ type: CLIENT_AUTHENTICATE_ERROR, payload: error.response });
		});
};

// removes the token
export const deauthenticateClient = () => (dispatch) => {
	removeCookie('client_token');
	dispatch({ type: CLIENT_DEAUTHENTICATE });
};

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
		.post(api.authentication, config)
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
