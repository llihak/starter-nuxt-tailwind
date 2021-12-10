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

	css: ['~/assets/css/main.css'],

	plugins: [],

	/** auto import components when used in templates */
	components: true,

	buildModules: ['@nuxt/postcss8', '@nuxtjs/dotenv'],

	modules: ['@nuxtjs/axios', '@nuxtjs/apollo'],

	/** axios module configuration */
	axios: {
		baseURL: process.env.API_URL || 'http://localhost:1337',
	},

	/** apollo module configuration */
	apollo: {
		clientConfigs: {
			default: {
				httpEndpoint: 'http://localhost:1337/graphql',
			},
		},
	},

	build: {
		/** add tailwind to the postcss configuration */
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	},
};
