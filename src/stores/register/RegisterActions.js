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
			dispatch({ type: REGISTER });
		})
		.catch((error) => {
			console.error(error);
		});
};
