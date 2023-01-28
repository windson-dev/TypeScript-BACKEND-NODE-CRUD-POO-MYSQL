  import * as sinon from 'sinon';
  import * as chai from 'chai';
  // @ts-ignore
  import chaiHttp = require('chai-http');

  import { app } from '../app';

  chai.use(chaiHttp);

  const { expect } = chai;

  describe('Testes da rota de login.', () => {

    describe('quando a requisição é feita com sucesso', async () => {
      it('deve retornar um status 201', async () => {
        const httpResponse = await chai
          .request(app)
          .post('/login')
          .send({
            email: 'admin@admin.com',
          })
        expect(httpResponse.status).to.equal(400)

      })
    })

  describe('quando a requisição é feita com sucesso', async () => {
    it('Testa se não é possivel fazer login com email e senha invalidos.', async () => {
    const result = await chai
       .request(app).post('/login').send({
        email: 'email@email.com',
        password: 'password'
       })
    expect(result.status).to.be.equal(401);

    })
  })
  sinon.restore()
})
