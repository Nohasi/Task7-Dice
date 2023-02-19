import { getDiceResults } from "../services/getDiceResults";

test('Returns "OK" status if fetching a valid response from the backend', async () => {
    jest.spyOn(global, "fetch").mockImplementation( 
        jest.fn(
          () => Promise.resolve({ json: () => Promise.resolve({ status: 200 }), 
        }), 
    ) as jest.Mock );

    const dice = 3;
    const players = 3;
    const throws = 3;

    const result = await getDiceResults(dice, throws, players);

    expect(result.status).toBe("OK");
});

test('Returns "Error" status if fetching an invalid response from the backend', async () => {
    jest.spyOn(global, "fetch").mockImplementation( 
        jest.fn(
          () => Promise.resolve({ json: () => Promise.resolve({ status: 406 }), 
        }), 
    ) as jest.Mock );

    const dice = 3;
    const players = 3;
    const throws = 3;

    const result = await getDiceResults(dice, throws, players);

    expect(result.status).toBe("Error");
});

afterEach(() => {
    jest.restoreAllMocks();
});