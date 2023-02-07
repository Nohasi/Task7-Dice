import { response, Response } from "express";
const request = require('supertest');
const http = require('http');
const app = require('../index');

describe('POST requests', () => {
    it('Should not connect to the server', async () => {
        const res = await request(app).post('/coinflip');
        expect(res.status).toEqual(404);
    });
});

describe('GET requests', () => {
    it('should correct a proper result when given a valid sentence', async () => {
        const res = await request(app).get('/coinflip').query({flips:8,side:'heads'});
        expect(res.status).toEqual(200);
        expect(['win','lose','draw']).toContain(res.body.result);
    });

    it('should correctly function when passed lowest possible value (1)', async () => {
        const res = await request(app).get('/coinflip').query({flips:1,side:'tails'});
        expect(res.status).toEqual(200);
        expect(['win','lose','draw']).toContain(res.body.result);
    });

    it('should correctly function when passed largest possible value (100)', async () => {
        const res = await request(app).get('/coinflip').query({flips:1,side:'tails'});
        expect(res.status).toEqual(200);
        expect(['win','lose','draw']).toContain(res.body.result);
    });

    describe('invalid requests', () => {
        it('should return an error if flips parameter does not exist', async () => {
            const res = await request(app).get('/coinflip').query({side:'tails'});
            expect(res.status).toEqual(406);
            expect(res.body.error).toBe("The 'flips' parameter is not passed");
        });
        
        it('should return an error if side parameter does not exist', async () => {
            const res = await request(app).get('/coinflip').query({flips: 9});
            expect(res.status).toEqual(406);
            expect(res.body.error).toBe("The 'side' parameter is not passed");
        });

        it('should return an error if flips parameter is empty', async () => {
            const res = await request(app).get('/coinflip').query({flips: '', side:'heads'});
            expect(res.status).toEqual(406);
            expect(res.body.error).toBe("No value was passed for Number of Flips");
        });

        it('should return an error if side parameter is empty', async () => {
            const res = await request(app).get('/coinflip').query({flips: 4, side:''});
            expect(res.status).toEqual(406);
            expect(res.body.error).toBe("The 'side' parameter is empty");
        });

        it('should return an error if flips is a non-number', async () => {
            const res = await request(app).get('/coinflip').query({flips: 'hello', side:'tails'});
            expect(res.status).toEqual(406);
            expect(res.body.error).toBe("'flips' should be passed as a number");
        });

        it('should return an error if flips is a negative number', async () => {
            const res = await request(app).get('/coinflip').query({flips: -9, side:'tails'});
            expect(res.status).toEqual(406);
            expect(res.body.error).toBe("Number of flips cannot be zero or a negative number");
        });

        
        it('should return an error if flips is a 0', async () => {
            const res = await request(app).get('/coinflip').query({flips: -9, side:'tails'});
            expect(res.status).toEqual(406);
            expect(res.body.error).toBe("Number of flips cannot be zero or a negative number");
        });

        it('should return an error if flips is not an integer', async () => {
            const res = await request(app).get('/coinflip').query({flips: 7.5, side:'tails'});
            expect(res.status).toEqual(406);
            expect(res.body.error).toBe("Number of flips must be an integer");
        });

        it('should return an error if flips is larger than 100', async () => {
            const res = await request(app).get('/coinflip').query({flips: 101, side:'tails'});
            expect(res.status).toEqual(406);
            expect(res.body.error).toBe("Number of flips must not be larger than 100");
        });

        it('should return an error if flips is larger than 100', async () => {
            const res = await request(app).get('/coinflip').query({flips: 17, side:'i am hungry'});
            expect(res.status).toEqual(406);
            expect(res.body.error).toBe("'side' should be either 'heads' or 'tails'");
        });
    });
});

afterAll((done: jest.DoneCallback) => {
    app.close();
    done();
});