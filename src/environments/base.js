/*
 * The default environment for production.
 * Values are overridden in other environment files.
 */
// #TODO: add production values
export default function (baseApi) {
	return {
		route: {
			baseRoute: '',
		},
		api: {
			authentication: baseApi + '/oauth/token',
			client: {
				surveys: {
					surveys: baseApi + '/api/ext/v1/survey',
					survey: baseApi + '/api/ext/v1/survey/',
				},
			},
			profile: baseApi + '/api/v1/profile',
			register: baseApi + '/api/register',
			util: {
				form: baseApi + '/api/v1/util/form/hsa',
			},
		},
		token: {
			auth: 'some_auth_token',
		},
		isProduction: true,
		isDevelopment: false,
	};
}
