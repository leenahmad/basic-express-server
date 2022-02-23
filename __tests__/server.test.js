'use strict';

const server = require('../src/server.js')

const supertest = require('supertest')

const request = supertest(server.app)

describe('testing API server' , ()=> {

    it('testing /', async()=> {
        const response = await request.get('/');
        expect(response.text).toEqual('home route')
    })

    it('test /dsts' , async () =>{
        const response = await request.get('/data');
        expect(typeof response.body).toEqual('object')
    })
})
