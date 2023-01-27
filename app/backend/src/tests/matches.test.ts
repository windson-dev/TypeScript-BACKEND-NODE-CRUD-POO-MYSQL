import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Matches from '../database/models/Matches';


chai.use(chaiHttp);

const { expect } = chai;

const mockBody = {
  id: 1,
  homeTeamId: 16,
  homeTeamGoals: 2,
  awayTeamId: 8,
  awayTeamGoals: 2,
  inProgress: true,
}

describe('Testes da rota Matches.', () => {
  beforeEach(async () => {
    sinon
      .stub(Matches, "create")
      .resolves(mockBody as unknown as Matches);
  });

  afterEach(()=>{
    (Matches.create as sinon.SinonStub).restore();
  })

  it('Testa se é possivel salvar uma partida.', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NzQ4NTY0NDgsImV4cCI6MTY3NDk0Mjg0OH0.2BtactdOTsLk0CGv6VBkFFC_A945yo-lGH9FBhXrz8g'
    const result = await chai.request(app).post('/matches')
    .set('Authorization', token)
    .send({
        homeTeamId: 16,
        awayTeamId: 8, 
        homeTeamGoals: 2,
        awayTeamGoals: 2
    })

    expect(result.status).to.be.equal(201);
  });
});