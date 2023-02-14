import { throwDice } from "../modules/throwDice";

describe('Passing values correctly', () => {
    it('Correctly returns values for all players if everyone rolls a 6 every time', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.95);
        const players = 3;
        const throws = 10;
        const dice = 5;
        
        const result = throwDice(dice, throws, players);
        expect(result[0].score).toEqual(300);
        expect(result[1].score).toEqual(300);
        expect(result[2].score).toEqual(300);
    });

    it('Correctly returns values for all players if everyone rolls a 1 every time', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0);
        const players = 3;
        const throws = 10;
        const dice = 5;
        
        const result = throwDice(dice, throws, players);
        expect(result[0].score).toEqual(50);
        expect(result[1].score).toEqual(50);
        expect(result[2].score).toEqual(50);
    });
});