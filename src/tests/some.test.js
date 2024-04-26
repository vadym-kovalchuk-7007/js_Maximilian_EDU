// const { getEmployees } = require('../some');
const { company, getEmployees } = require('../some');

describe('Some module', () => {
	test('check employees count', () => {
		expect(getEmployees().length).toBe(3);
	});
	test('check employees items', () => {
		expect(getEmployees()).toEqual(company.employees);
	});
	test('check employees contains', () => {
		const employees = getEmployees();
		expect(employees).toContain('Vad');
	});
});