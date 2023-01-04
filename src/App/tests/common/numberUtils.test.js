import { formatNumber } from '../../common/utils/numberUtils';

describe('numberUtils', () => {
    test('formatNumber should return empty string with null argument given', () => {
        expect(formatNumber(null)).toBe('');
    });

    test('formatNumber should return 123.456 with 123456 argument given', () => {
        expect(formatNumber(123456)).toBe('123.456');
    });
});
