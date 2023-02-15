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
	expect(result).toBe(    
	<div>        
		<tr key={0}>
			<td>1</td>
			<td>55</td>
		</tr>
		<tr key={1}>
			<td>2</td>
			<td>65</td>
		</tr>
		<tr key={2}>
			<td>3</td>
			<td>53</td>
		</tr>
		<tr key={3}>
			<td>4</td>
			<td>46</td>
		</tr>
	</div>
	);
});