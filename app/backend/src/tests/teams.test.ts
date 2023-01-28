import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota Teams.', () => {

  it('Testa se é possivel listar todos os times.', async () => {
    const httpResponse = await chai.request(app).get('/teams')

    expect(httpResponse.status).to.be.equal(200);
  });

  sinon.restore()
});