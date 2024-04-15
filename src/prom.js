export function prom() {
	const promise = new Promise((resolve) => {
		resolve('Hello from promise');
	});
	return promise;
}