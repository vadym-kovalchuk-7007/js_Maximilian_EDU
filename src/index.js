import gas from './assets/GasNov.png';
import { generateJoke } from "./joke";
import { prom as promise } from "./prom.js";
import './styles/main.scss';

const gasImg = document.getElementById('gasPc');
gasImg.src = gas;

async function firstFunc() {
	console.log("Scripter");
	const joke = await generateJoke();
	document.getElementById('someP').innerHTML = joke.data.joke;
}
async function checkPromise() {
	const prom = await promise();
	console.log(`result from promise ${prom}`)
}

const getJokeBtn = document.getElementsByTagName('button')[0];
getJokeBtn.addEventListener('click', firstFunc);

firstFunc();
checkPromise();
