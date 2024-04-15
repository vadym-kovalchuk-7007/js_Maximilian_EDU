import axios from 'axios';

export function generateJoke() {
	const config = {
		headers: { Accept: 'application/json', }
	};
	console.log('Some joke js');
	return axios.get('https://icanhazdadjoke.com', config);
}
