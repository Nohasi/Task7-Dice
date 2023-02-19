import diceResults from "../prop_types/diceResults";
import { buildTableBody } from "../services/buildTableBody";

test('Sending in a value normally', () => {
    const scoreboard = [
		{
			"player": 1,
			"score": 55
		},
		{
			"player": 2,
			"score": 65
		},
		{
			"player": 3,
			"score": 53
		},
		{
			"player": 4,
			"score": 46
		}
	];

    const result = buildTableBody(scoreboard);
	for(let i = 0; i < result.length; i++){
		expect(String(result[i])).toBe(String(
			<tr key={i}>
				<td>{scoreboard[i].player}</td>
				<td>{scoreboard[i].score}</td>
			</tr>
		)
		);
	}
});

test('Sending in only one value', () => {
	const scoreboard = [
		{
			"player": 1,
			"score": 55
		}
	]

	const result = buildTableBody(scoreboard);
	expect(String(result[0])).toBe(String(
	<tr key={0}>
		<td>{scoreboard[0].player}</td>
		<td>{scoreboard[0].score}</td>
	</tr>
	));
});

test('Sending in an empty scoreboard', () => {
	const scoreboard: diceResults[] = [];
	const result = buildTableBody(scoreboard);
	expect(String(result[0])).toBe(String(
		<tr key={0}>
			<td>Empty array passed</td>
			<td>Empty array passed</td>
		</tr>
	));
});