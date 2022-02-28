'use strict';

const supertest = require('supertest');

const server = require('../src/server.js');

test('500 name error' , async() =>{
    const res = await supertest(server.app).get('/person');
    expect(res.status).toEqual(500)
})

test('404 error' , async() =>{
    const res = await supertest(server.app).post('/person?name=leen');
    expect(res.status).toEqual(404)
})

test('' , async()=> {
    const res = await supertest(server.app).get('/person?name=leen');
    expect(typeof res.body).toEqual('object')

})