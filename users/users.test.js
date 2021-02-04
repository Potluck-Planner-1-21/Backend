require('dotenv').config();
const supertest = require('supertest');
const server = require('../server');
const db = require('../data/dbConfig');

beforeAll(async () => {
    await db.seed.run();
})

afterAll(async () => {
    await db.destroy();
})

test('sanity', () => {
    expect(true).toBe(true)
  })
  
  describe('testing users', () => {
    it('gets a list of users', async () => {
        const res = await supertest(server).get('/users');
        expect(res.body.length).toBe(3);
        expect(res.body[0].name).toBe('test1');
    })

    it('registers a user', async () => {
      const res = await supertest(server).post('/users/register').send({
        name: 'tyr',
        password: 'tyr',
        email: 'tyr',
      });
      expect(res.statusCode).toBe(201);
      expect(res.body[0].name).toBe('tyr');
    })

    let token = '';
    it('logs in a user', async () => {
      const res = await supertest(server).post('/users/login').send({
        name: 'tyr',
        password: 'tyr',
      });
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe('welcome, tyr');
      token = res.body.token;
    })

    it('updates a user', async () => {
        const res = await supertest(server).put('/users/4').send({
            email: 'tag',
        });
        expect(res.statusCode).toBe(200);
    })

    it('gets updated email', async () => {
        const res = await supertest(server).get('/users/4');
        expect(res.body[0].email).toBe('tag');
    })

    it('deletes a user', async () => {
        const res = await supertest(server).delete('/users/4');
        expect(res.statusCode).toBe(200);
    })

    it('checks that user was deleted', async () => {
        const res = await supertest(server).get('/users');
        expect(res.body.length).toBe(3);
    })
})