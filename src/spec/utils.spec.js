const { dateFormat } = require('../utils/utils');

describe('dateFormat', () => {
	const date = '2017-11-22T12:36:03.389Z';
	it('returns a string', () => {
		expect(typeof dateFormat(date)).toBe('string');
	});
	it('returns an empty string if no date is passed through', () => {
		expect(dateFormat()).toBe('');
	});
	it('returns a formatted date string', () => {
		expect(dateFormat(date)).toBe('22 Nov 2017');
	});
	it('doesnt mutate the data', () => {
		const dateClone = '2017-11-22T12:36:03.389Z';
		dateFormat(date);
		expect(date).toBe(dateClone);
	});
});
