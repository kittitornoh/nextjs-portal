import axios from 'axios';
import development from '../../environments/development';
import { GET_PROFILE, GET_PROFILE_ERROR } from './ProfileTypes';
import { getCookie } from '../../_helpers/cookie';

const environment = development;
const api = environment.api.profile;

export const getProfile = () => (dispatch) => {
	const config = {
		headers: {
			Authorization: 'Bearer ' + getCookie('token'),
		},
	};

	axios
		.get(api, config)
		.then((res) => {
			dispatch({ type: GET_PROFILE, payload: res.data.data });
		})
		.catch((err) => {
			console.error(err);
			dispatch({ type: GET_PROFILE_ERROR, payload: err });
		});
};
