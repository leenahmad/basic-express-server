'use strict';

const supertest = require('supertest');

const server = require('../src/server.js');

test('500 name error' , async() =>{
    const res = await supertest(server.app).get('/person');
    expect(res.status).toEqual(500)
})