import { expect } from 'chai';
import recipesReducer, { initialState } from 'src/reducers/recipes';
import { saveRecipes } from 'src/actions/';

describe('Reducer recipes', () => {
  describe('structure', () => {
    it('should be a function', () => {
      expect(recipesReducer).to.be.a('function');
    });

    it('should be an array', () => {
      expect(initialState).to.be.an('array');
      expect(recipesReducer()).to.be.equal(initialState);
    });
  });

  describe('with action', () => {
    it('SAVE_RECIPES', () => {
      const recipes = [{ a: 1 }, { b: 2 }];
      const action = saveRecipes(recipes);

      expect(recipesReducer(initialState, action))
        .to.be.an('array')
        .eql(recipes);
    });
  });
});
