import nextConfig from "eslint-config-next";

const config = [
	...nextConfig,
	{
		rules: {
			"react/no-unescaped-entities": ["error", { forbid: [] }],
		},
	},
];

export default config;
