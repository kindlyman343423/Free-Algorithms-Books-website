const app = require('../server');
const request = require('supertest');
const assert = require('assert');

describe('Testing Free Algorithm books website server APIs', ()=>{

    describe('1. Testing /api/v1/get', ()=>{
        it('a. Normal Test', async ()=>{
            const getResponse = await request(app)
                .get('/api/v1/get')
                .expect(400)
            assert.strictEqual(getResponse.body.message, 'Bad Request because of no language parameter')
        })

        it('b. Check if API is returning the data', async ()=>{
            await request(app)
                .get('/api/v1/get?language=JAVA')
                .expect(200)
        })
    })

    describe('2. Testing API: /api/v1/search',()=>{
        it('a. Normal test',async ()=>{
            await request(app)
                .get('/api/v1/search')
                .expect(400)
        })

        it('b. Test with name query' , async ()=>{
            await request(app)
                .get('/api/v1/search?name=algo')
                .expect(400)
        })

        it('c. Test with language query', async ()=>{
            await request(app)
                .get('/api/v1/search?language=C')
                .expect(200)
        })

        it('d. Test with both language and name', async()=>{
            await request(app)
                .get('/api/v1/search?language=JAVA&name=algo')
                .expect(200)
        })
    })

    // it('Testing POST APIs', async ()=>{
    //     const postResponse = await request(app)
    //         .post('/api/v1/post')
    //         .send({'KEY':'VALUE'})
    //         .expect(201)
    //     assert.match(postResponse.body.message, /POST/);
    // })
})