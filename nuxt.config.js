export default {
	/** disable nuxt telemetry */
	telemetry: false,

	/** deployment target for nuxt */
	target: 'server',

	head: {
		title: 'Starter Template | Superior Software Solutions',

		htmlAttrs: {
			lang: 'en',
		},

		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Starter template for Nuxt.js projects.' },
			{ name: 'format-detection', content: 'telephone=no' },
		],

		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],

		/** fontawesome icon kit */
		script: [{ src: 'https://kit.fontawesome.com/b70487bd63.js', crossorigin: 'anonymous' }],
	},

	css: ['~/assets/css/main.css'],

	plugins: ['~/plugins/axios.js'],

	/** auto import components when used in templates */
	components: true,

	buildModules: ['@nuxt/postcss8'],

	modules: ['@nuxtjs/axios'],

	/** axios module configuration */
	axios: {
		baseURL:
			process.env.NODE_ENV === 'production' ? 'https://backstage.s3interdev.com/api' : 'http://localhost:1337/api',
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
