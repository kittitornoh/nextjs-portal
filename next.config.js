module.exports = {
	env: {
		BASE_API: 'https://api-test.inxitehealth.com',
		CLIENT_SECRET_PASSWORD: 't7flgIM8jCxmEKX73SZ4HeIP8K8UOLIrM7LBwgCt',
		CLIENT_SECRET_CLIENT_CRED: 'fndiojXNciHfqmjR7w4avbb2BM7D7OGDa8PiR3gM',
	},
	webpack(config, { dev }) {
		if (dev) {
			config.devtool = 'cheap-module-source-map';
		}
		return config;
	},
};
