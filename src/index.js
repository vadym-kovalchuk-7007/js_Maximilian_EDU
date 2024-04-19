import gas from './assets/GasNov.png';
import { generateJoke } from './joke';
import { prom as promise } from './prom.js';
import './styles/main.scss';

const gasImg = document.getElementById('gasPc');
gasImg.src = gas;
const getLocationBtn = document.getElementById('getLocation');
getLocationBtn.addEventListener('click', getLocation);

async function firstFunc() {
	const joke = await generateJoke();
	document.getElementById('someP').innerHTML = joke.data.joke;
	fetch('http://localhost:3000/add-location', {
		method: 'POST',
		body: JSON.stringify({
			address: 'Some address',
			data: joke.data.joke
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(data => {
			if (getLocationBtn.hasAttribute('disabled')) getLocationBtn.removeAttribute('disabled');
			console.log(data);
		});
}
async function checkPromise() {
	const prom = await promise();
	console.log(`result from promise ${prom}`);
}

function getLocationsLength() {
	fetch('http://localhost:3000/locations', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	})
		.then(response => response.json())
		.then(data => {
			if (!data.ids) {
				getLocationBtn.setAttribute('disabled', '');
			}
		});
}
function getLocation() {
	fetch('http://localhost:3000/location/' + 1, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => {
			if (response.status === 404) {
				throw new Error('oops! Not in arr');
			}
			return response.json();
		})
		.then(data => {
			Reflect.defineProperty(data, 'toString', {
				value: function () {
					return `address: ${this.address}, id: ${this.id}, data: ${this.data}`;
				},
				enumerable: false,
				configurable: false
			});
			console.log(data);
			const pTag = document.createElement('p');
			pTag.textContent = data;
			document.body.insertAdjacentElement('beforeend', pTag);
		})
		.catch(err => console.log(err));
}

const getJokeBtn = document.getElementsByTagName('button')[0];
getJokeBtn.addEventListener('click', firstFunc);

checkPromise();
getLocationsLength();
