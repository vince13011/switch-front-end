import { expect } from 'chai';
import { findRecipeBySlug } from 'src/selectors/recipes';
import recipesData from 'src/data';

describe('Selectors Recipes', () => {
  describe('findRecipeBySlug', () => {
    describe('structure', () => {
      it('should be a function', () => {
        expect(findRecipeBySlug).to.be.a('function');
      });
    });
    describe('execution', () => {
      it('should return undefined', () => {
        expect(findRecipeBySlug()).to.be.an('undefined');
      });

      // TODO: à voir si on le garde
      it('should return undefined with empty recipes', () => {
        expect(findRecipeBySlug([])).to.be.an('undefined');
      });

      it('should return an object with a property id', () => {
        expect(findRecipeBySlug(recipesData, recipesData[0].slug))
          .to.be.an('object')
          .to.have.property('id', recipesData[0].id);
      });

      it('should return first element in recipes list', () => {
        expect(findRecipeBySlug(recipesData, recipesData[0].slug)).to.be.equal(recipesData[0]);
      });
    });
  });
});
