import { determineWinner } from "../modules/determineWinner";

test('Passing results with a clear winner', () => {
    const results = [
		{
			"player": 1,
			"score": 51
		},
		{
			"player": 2,
			"score": 35
		},
		{
			"player": 3,
			"score": 31
		}
	]
    const output = determineWinner(results);
    expect(output.result).toBe("win");
    expect(output.winner).toEqual(1);
    expect(output.score).toEqual(51);
});

test('Passing results where all players tie', () => {
    const results = [
        {
			"player": 1,
			"score": 51
		},
		{
			"player": 2,
			"score": 51
		},
		{
			"player": 3,
			"score": 51
		}
    ]

    const output = determineWinner(results);
    expect(output.result).toBe("tie");
    expect(output.tiedPlayers).toStrictEqual([1,2,3]);
    expect(output.score).toEqual(51);
});