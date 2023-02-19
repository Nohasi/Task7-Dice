import { response, Response } from "express";
const request = require('supertest');
const http = require('http');
const app = require('../index');

describe('POST requests', () => {
    it('Should not connect to the server', async () => {
        const res = await request(app).post('/dice');
        expect(res.status).toEqual(404);
    });
});

describe('GET requests', () => {
    it('should return a proper result when passed valid values', async () => {
        const res = await request(app).get('/dice').query({dice: 3, throws: 3, players: 3});
        expect(res.status).toEqual(200);
        expect(['tie', 'win']).toContain(res.body.result.result);
    });

    it('should return a proper result when passed maximum values (dice:5, throws:10, players: 10)', async () => {
        const res = await request(app).get('/dice').query({dice:5, throws:10, players: 10});
        expect(res.status).toEqual(200);
        expect(['tie', 'win']).toContain(res.body.result.result);
    });

    it('should return a proper result when passed minimum values (dice:1, throws:1, players: 2)', async () => {
        const res = await request(app).get('/dice').query({dice:1, throws:1, players: 2});
        expect(res.status).toEqual(200);
        expect(['tie', 'win']).toContain(res.body.result.result);
    });

    describe('Invalid requests', () => {
        describe('missing parameters', () => {
            it('should return an error if dice parameter is missing', async () => {
                const res = await request(app).get('/dice').query({throws: 3, players: 3});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("The 'dice' parameter is not passed.");;
            });
            
            it('should return an error if throws parameter is missing', async () => {
                const res = await request(app).get('/dice').query({dice: 3, players: 3});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("The 'throws' parameter is not passed.");;
            });

            it('should return an error if players parameter is missing', async () => {
                const res = await request(app).get('/dice').query({throws: 3, dice: 3});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("The 'players' parameter is not passed.");;
            });
        });

        describe('Empty parameters', () => {
            it('should return an error if the dice parameter is empty', async () => {
                const res = await request(app).get('/dice').query({dice: "", throws: 3, players: 3});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("No value was passed for 'dice'");
            });

            it('should return an error if the throws parameter is empty', async () => {
                const res = await request(app).get('/dice').query({dice: 3, throws: "", players: 3});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("No value was passed for 'throws'");
            });

            it('should return an error if the players parameter is empty', async () => {
                const res = await request(app).get('/dice').query({dice: 3, throws: 3, players: ""});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("No value was passed for 'players'");
            });
        });

        describe('Non-number parameters', () => {
            it('should return an error if the dice parameter is not a number', async () => {
                const res = await request(app).get('/dice').query({dice: "hello", throws: 3, players: 3});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("'dice' value should be a number");
            });

            it('should return an error if the throws parameter is not a number', async () => {
                const res = await request(app).get('/dice').query({dice: 3, throws: "yo", players: 3});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("'throws' value should be a number");
            });

            it('should return an error if the players parameter is not a number', async () => {
                const res = await request(app).get('/dice').query({dice: 3, throws: 3, players: "not a number"});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("'players' value should be a number");
            });
        });
        
        describe('Lower bound values', () => {
            it('should return an error if the dice value is too low', async () => {
                const res = await request(app).get('/dice').query({dice: 0, throws: 3, players: 3});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("Number of dice cannot be zero or a negative number");
            });

            it('should return an error if the throws value is too low', async () => {
                const res = await request(app).get('/dice').query({dice: 3, throws: 0, players: 3});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("Number of throws cannot be zero or a negative number");
            });

            it('should return an error if the players value is too low', async () => {
                const res = await request(app).get('/dice').query({dice: 3, throws: 3, players: 1});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("Must have at least two players");
            });
        });

        describe('Upper bound values', () => {
            it('should return an error if the dice value is too high', async () => {
                const res = await request(app).get('/dice').query({dice: 6, throws: 3, players: 3});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("Number of dice must not be larger than 5");
            });

            it('should return an error if the throws value is too high', async () => {
                const res = await request(app).get('/dice').query({dice: 3, throws: 11, players: 3});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("Number of throws must not be larger than 10");
            });

            it('should return an error if the players value is too high', async () => {
                const res = await request(app).get('/dice').query({dice: 3, throws: 3, players: 11});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("Number of players must not be larger than 10");
            });
        });

        describe('Floating point values', () => {
            it('should return an error if the dice value is a float', async () => {
                const res = await request(app).get('/dice').query({dice: 3.2, throws: 3, players: 3});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("Number of dice must be an integer");
            });

            it('should return an error if the throws value is a float', async () => {
                const res = await request(app).get('/dice').query({dice: 3, throws: 3.3, players: 3});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("Number of throws must be an integer");
            });

            it('should return an error if the players value is a float', async () => {
                const res = await request(app).get('/dice').query({dice: 3, throws: 3, players: 3.4});
                expect(res.status).toEqual(406);
                expect(res.body.error).toBe("Number of players must be an integer");
            });
        });
    });
})

afterAll((done: jest.DoneCallback) => {
    app.close();
    done();
});