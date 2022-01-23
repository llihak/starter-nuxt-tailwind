export default function ({ $axios }) {
	$axios.onRequest((config) => {
		console.log('Request was made to the ' + config.url + ' api endpoint.');
	});
}
