import Router from 'next/router';
import * as authActions from '../stores/auth/authActions';
import { getCookie } from './cookie';

// checks if the path is being loaded on the server, and if so, get auth token from cookie
export default function(ctx) {
	const login = '/login?redirect=true'; // #TODO: query params for debugging

	if (ctx.isServer) {
		if (ctx.req.headers.cookie) {
			const token = getCookie('token', ctx.req);
			// redirect if there is no cookie
			if (!token) {
				ctx.res.writeHead(302, {
					Location: login
				});
				ctx.res.end();
			} else {
				ctx.store.dispatch(authActions.reauthenticate(token));
			}
		} else {
			console.log('you shall not pass'); // #TODO: remove
			ctx.res.writeHead(302, {
				Location: login
			});
			ctx.res.end();
		}
	} else {
		const token = ctx.store.getState().auth.token;

		// redirect if there is no cookie
		if (!token) {
			Router.push(login);
		}
	}
}
