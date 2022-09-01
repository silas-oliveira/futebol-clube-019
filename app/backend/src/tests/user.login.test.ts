import * as bcrypt from 'bcryptjs';
import * as chai from 'chai';
import * as Sinon from 'sinon';
import { app } from '../app';
import User from '../database/models/user';
// @ts-ignore
import chaiHttp = require('chai-http');


chai.use(chaiHttp);

const userLoginMock = {
  email:"admin@admin.com",
  password:"secret_admin"
}

const userLoginMockResult = {
 id: 2, 
 username: 'Admin',
 role: 'admin',
 email: 'admin@admin.com',
 password: 'tralala'
}

const { expect } = chai;

describe('Users', () => {
  
  describe('Testa a rota de login', () => {
    Sinon.stub(User, 'findOne').resolves(userLoginMockResult as User)
    Sinon.stub(bcrypt, 'compare').resolves(true);
    
    it('Retorna status 200', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(userLoginMock);
      
      expect(response.status).to.equal(200)
    })
  })
});

describe('Matchers', () => {
  describe('Testa a funcao list', () => {
    it('Retorna status 200', async () => {
      const response = await chai.request(app)
        .get('/matches')

        expect(response.status).to.equal(200)
    })
  })
})
