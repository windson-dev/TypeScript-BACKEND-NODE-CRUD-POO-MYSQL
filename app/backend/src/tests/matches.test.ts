import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota Matches.', () => {

  describe('se for possivel criar uma nova partida', async () => {
    it('deve retornar status 201.', async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NzUwMTQ4NTgsImV4cCI6MTY3NTEwMTI1OH0.8vaCP0z0jlLb057oiK5u4-mdV0uSRnyRq31UsQTS2tU'
      const httpResponse = await chai.request(app).post('/matches')
      .set('Authorization', token)
      .send({
          homeTeamId: 16,
          awayTeamId: 8, 
          homeTeamGoals: 2,
          awayTeamGoals: 2
      })
      expect(httpResponse.status).to.be.equal(201);
  
    });
  })

  describe('se for possivel atualizar uma partida em andamento' , () => {
    it('deve retornar o status 200', async () => {
      const httpResponse = await chai.request(app).patch('/matches/:id')
      .send({
        homeTeamGoals: 3,
        awayTeamGoals: 1
      })
  
      expect(httpResponse.status).to.be.equal(200);
    })
  })
  
  sinon.restore()
});