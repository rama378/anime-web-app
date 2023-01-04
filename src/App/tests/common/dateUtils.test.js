import { getCurrentYear } from '../../common/utils/dateUtils';

describe('dateUtils', () => {
    beforeEach(() => {
        Date.prototype.getFullYear = () => {
            return 2022;
        };
    });

    test('getCurrentYear should return 2022 with mocked year 2022', () => {
        expect(getCurrentYear()).toBe(2022);
    });
});
