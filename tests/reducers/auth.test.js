import { expect } from 'chai';
import authReducer, { initialState } from 'src/reducers/auth';
import { setLoginTrue } from 'src/actions/';

describe('Reducer auth', () => {
  describe('structure', () => {
    it('should be a function', () => {
      expect(authReducer).to.be.a('function');
    });

    it('should be an object', () => {
      expect(initialState).to.be.an('object');
      expect(authReducer()).to.be.equal(initialState);
    });
  });

  describe('with action', () => {
    it('SET_LOGIN_TRUE', () => {
      const authObject = { email: 1, password: 2, token: 25 };
      const action = setLoginTrue(authObject);

      expect(authReducer(initialState, action))
        .to.be.an('object')
        .eql({ ...action.authObject });
    });
  });
});
