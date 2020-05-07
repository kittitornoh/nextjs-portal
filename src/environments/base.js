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
				country: baseApi + '/api/ext/v1/country',
				county: baseApi + '/api/ext/v1/county/',
				ethnicity: baseApi + '/api/ext/v1/ethnicity/',
				gender: baseApi + '/api/ext/v1/gender',
				race: baseApi + '/api/ext/v1/race/',
				state: baseApi + '/api/ext/v1/state/',
				surveys: {
					surveys: baseApi + '/api/ext/v1/survey',
					survey: baseApi + '/api/ext/v1/survey/',
				},
				surveyParticipants: {
					storeSurveyParticipant: baseApi + '/api/ext/v1/participant',
				},
				surveySubmission: {
					storeSurveyAndAnswers: baseApi + '/api/ext/v1/surveyAnswer',
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
