import { flipCoins } from "../modules/flipCoins";

describe('Passing values correctly', () => {
    it('Returns heads correctly', () => {
        // Mocking random to always give heads
        jest.spyOn(global.Math, 'random').mockReturnValue(1);
        const flips = 10;
        const side = 'heads';
        const result = flipCoins(flips, side);
        expect(result.headsCount).toEqual(10);
        expect(result.tailsCount).toEqual(0);
    });

    it('Returns tails correctly', () => {
        // Mocking random to always give tails
        jest.spyOn(global.Math, 'random').mockReturnValue(0);
        const flips = 10;
        const side = 'heads';
        const result = flipCoins(flips, side);
        expect(result.tailsCount).toEqual(10);
        expect(result.headsCount).toEqual(0);
    });

    it('Takes Heads as default when invalid side is passed', () => {
        // Mocking random value to always be head
        jest.spyOn(global.Math, 'random').mockReturnValue(1);
        const flips = 10;
        const side = 'helloworld';
        const result = flipCoins(flips, side);
        result.resultsContainer.forEach(item => {
            expect(item.result).toBe(true);
        });
    });
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})