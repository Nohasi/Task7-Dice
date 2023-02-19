import { playerResult } from "../modules/playerResult";

describe('passing values correctly', () => {
    it('Returns the sum of all dice rolls for player if player rolls a 6 every time (highest possible value)', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.95);
        const playerNo = 1;
        const throws = 10;
        const dice = 5;
        
        const result = playerResult(playerNo, dice, throws);
        expect(result.score).toEqual(300);
    });

    it('Returns the sum of all dice rolls for player if player rolls a 1 every time (lowest possible value)', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0);
        const playerNo = 1;
        const throws = 10;
        const dice = 5;
        
        const result = playerResult(playerNo, dice, throws);
        expect(result.score).toEqual(50);
    });
});


afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})