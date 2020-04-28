import axios from 'axios';
import Router from 'next/router';
import development from '../../environments/development';
import {} from '../../_helpers/cookie';
import { REGISTER, REGISTER_ERROR } from './RegisterTypes';

// define environment and api route
const environment = development;
const api = environment.api.register;

export const register = (user) => (dispatch) => {
	axios
		.post(api, user)
		.then((res) => {
			console.log(res);
			dispatch({ type: REGISTER });
		})
		.catch((error) => {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				// console.log(error.response.data);
				// console.log(error.response.status);
				// console.log(error.response.headers);

				const err = error.response.data.errors.email
					? error.response.data.errors.email[0]
					: error.response.data.errors;
				dispatch({ type: REGISTER_ERROR, payload: err });
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log('Error', error.message);
			}
			//console.log(error.config);
		});
};
