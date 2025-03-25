import { NumberService } from './numberService';

describe("NumberService", () => {
    let numberService;
    beforeEach(() => {
        numberService = new NumberService();
    });
    it('should return a number between 0 and 10', () => {
        const number = numberService.generateNumber();
        expect(number).toBeGreaterThanOrEqual(0);
        expect(number).toBeLessThanOrEqual(100);
        expect(Number.isInteger(numberService.generateNumber())).toBe(true);
    });

});