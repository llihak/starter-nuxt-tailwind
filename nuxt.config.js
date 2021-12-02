export default {
	/** disable nuxt telemetry */
	telemetry: false,

	/** deployment target for nuxt */
	target: 'server',

	head: {
		title: 'Starter Template | Nuxt.js Project',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'Starter template for Nuxt.js projects.',
			},
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
	},

	css: [],

	plugins: [],

	/** auto import components when used in templates */
	components: true,

	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxtjs/dotenv'],

	modules: ['@nuxtjs/apollo'],

	apollo: {
		clientConfigs: {
			default: {
				httpEndpoint: process.env.BACKEND_GRAPHQL_URL || 'http://localhost:1337/graphql',
			},
		},
	},

	build: {},
};
