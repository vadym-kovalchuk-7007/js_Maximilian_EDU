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

const getEmployees = () => {
	const employees = [];
	for (const employee of company) {
		employees.push(employee);
	}
	return employees;
};

module.exports = { company, getEmployees };