const { getRandomInt, prom } = require('../prom');
jest.mock('../prom', () => {
	const origMod = jest.requireActual('../prom');
	return {
		__esModule: true,
		...origMod,
		prom: jest.fn(() => Promise.resolve('Some prom'))
	};
});

describe('Math', () => {
	test('Check randomint', () => {
		const arr = [[0, 1], [1, 5], [2, 10]];
		arr.forEach(val => {
			const randomInt = getRandomInt(val[0], val[1]);
			expect(randomInt > val[0] && randomInt <= val[1]);
		});
	});
});
describe('Check Promise', () => {
	test('test1', async () => {
		return prom().then(data => {
			expect(data).toBe('Some prom');
		});
	});

});
