console.log('Some JS file');

const company = {
	employees: ['Vad', 'Vet', 'Anna'],
	year: '2021',
	[Symbol.iterator]: function* () {
		let currEmployee = 0;
		while (currEmployee < this.employees.length) {
			yield this.employees[currEmployee];
			currEmployee++;
		}
	},
};

for (const employee of company) {
	console.log(employee);
}