import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import User from '../database/models/Users';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota de login.', () => {
  beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({
        username: 'User',
        role: 'user',
        email: 'user@user.com',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO', 
      } as User);
  });

  afterEach(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Testa se é possivel fazer login.', async () => {
    const result = await chai
       .request(app).post('/login').send({
        email: 'test.user@test.com',
        password: 'secret_user'
       })

    expect(result.status).to.be.equal(200);
  });
});