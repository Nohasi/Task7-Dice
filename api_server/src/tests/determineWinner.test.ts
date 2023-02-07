import { determineWinner } from "../modules/determineWinner";

test('it should return a loss when target is heads and more tails were flipped', () => {
    const flips = 4;
    const flippedCoins = [
        {
            "target": "heads",
            "sideFlipped": "heads",
            "result": true
        },
        {
            "target": "heads",
            "sideFlipped": "tails",
            "result": false
        },
        {
            "target": "heads",
            "sideFlipped": "tails",
            "result": false
        },
        {
            "target": "heads",
            "sideFlipped": "tails",
            "result": false
        }
    ];
    expect(determineWinner(flips, flippedCoins)).toBe('lose');
})

test('it should return a win when target is heads and more heads were flipped', () => {
    const flips = 4;
    const flippedCoins = [
        {
            "target": "heads",
            "sideFlipped": "tails",
            "result": false
        },
        {
            "target": "heads",
            "sideFlipped": "heads",
            "result": true
        },
        {
            "target": "heads",
            "sideFlipped": "heads",
            "result": true
        },
        {
            "target": "heads",
            "sideFlipped": "heads",
            "result": true
        }
    ]
    expect(determineWinner(flips, flippedCoins)).toBe('win');
})

test('it should return a draw when equal heads and tails are flipped', () => {
    const flips = 4;
    const flippedCoins = [
        {
            "target": "heads",
            "sideFlipped": "heads",
            "result": true
        },
        {
            "target": "heads",
            "sideFlipped": "tails",
            "result": false
        },
        {
            "target": "heads",
            "sideFlipped": "heads",
            "result": true
        },
        {
            "target": "heads",
            "sideFlipped": "tails",
            "result": false
        }
    ]
    expect(determineWinner(flips, flippedCoins)).toBe('draw');
})

