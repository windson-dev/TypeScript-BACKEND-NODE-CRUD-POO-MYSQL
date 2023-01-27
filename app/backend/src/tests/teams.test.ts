import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Teams from '../database/models/Teams';

chai.use(chaiHttp);

const { expect } = chai;

const mockResponse = [
  {
    id: 1,
    teamName: "Avaí/Kindermann"
  },
  {
    id: 2,
    teamName: "Bahia"
  },
  {
    id: 3,
    teamName: "Botafogo"
  },
  {
    id: 4,
    teamName: "Corinthians"
  },
  {
    id: 5,
    teamName: "Cruzeiro"
  },
  {
    id: 6,
    teamName: "Ferroviária"
  },
  {
    id: 7,
    teamName: "Flamengo"
  },
  {
    id: 8,
    teamName: "Grêmio"
  },
  {
    id: 9,
    teamName: "Internacional"
  },
  {
    id: 10,
    teamName: "Minas Brasília"
  },
  {
    id: 11,
    teamName: "Napoli-SC"
  },
  {
    id: 12,
    teamName: "Palmeiras"
  },
  {
    id: 13,
    teamName: "Real Brasília"
  },
  {
    id: 14,
    teamName: "Santos"
  },
  {
    id: 15,
    teamName: "São José-SP"
  },
  {
    id: 16,
    teamName: "São Paulo"
  }
]

describe('Testes da rota Teams.', () => {
  beforeEach(async () => {
    sinon
      .stub(Teams, "findAll")
      .resolves(mockResponse as unknown as Teams[]);
  });

  afterEach(()=>{
    (Teams.findAll as sinon.SinonStub).restore();
  })

  it('Testa se é possivel listar todos os times.', async () => {
    const result = await chai.request(app).get('/teams')

    expect(result.status).to.be.equal(200);
  });
});