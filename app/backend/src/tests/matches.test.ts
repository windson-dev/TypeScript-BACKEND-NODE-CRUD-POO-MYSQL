import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota Matches.', () => {

  it('Testa se é possivel salvar uma partida.', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NzQ4NTY0NDgsImV4cCI6MTY3NDk0Mjg0OH0.2BtactdOTsLk0CGv6VBkFFC_A945yo-lGH9FBhXrz8g'
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

  it('testa se é possivel atualizar partidas em andamento', async () => {
    const httpResponse = await chai.request(app).patch('/matches/:id')
    .send({
      homeTeamGoals: 3,
      awayTeamGoals: 1
    })

    expect(httpResponse.status).to.be.equal(200);
    
  })
  sinon.restore()
});