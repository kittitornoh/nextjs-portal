module.exports = {
	env: {
		BASE_API: 'https://api-test.inxitehealth.com',
		CLIENT_SECRET_PASSWORD: 'vKN8v9OuE2FoRqC4L6ZZsJ6MuVwclsEYSd77RFwf',
		CLIENT_SECRET_CLIENT_CRED: '7DK7Wn7fHsXfXiIytEWgCMhTWcoAeKnFJpPAn1L1',
	},
	webpack(config, { dev }) {
		if (dev) {
			config.devtool = 'cheap-module-source-map';
		}
		return config;
	},
};
