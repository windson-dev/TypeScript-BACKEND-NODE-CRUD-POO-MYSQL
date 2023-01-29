import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota LeaderBoard/home.', () => {

  describe('se for possivel listar o leaderboard dos times da casa ' , () => {
    it('deve retornar o status 200', async () => {
      const httpResponse = await chai.request(app).get('/leaderboard/home')
      .send()
  
      expect(httpResponse.status).to.be.equal(200);
    })
  })
  sinon.restore()
});