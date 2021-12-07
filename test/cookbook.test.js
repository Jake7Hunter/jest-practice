const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      //Arrange
      const myCookbook = new Cookbook();

      //Act
      myCookbook.addRecipe(`fajitas`, [`chicken`, `salsa`, `tortillas`]);

      //Assert
      expect(myCookbook.recipes).toEqual({ fajitas: [`chicken`, `salsa`, `tortillas`]});
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      const myCookbook = new Cookbook();

      myCookbook.addRecipe(`fajitas`, [`chicken`, `salsa`, `tortillas`]);
      const myRecipes = myCookbook.listRecipes();

      expect(myRecipes).toEqual([`fajitas`]);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      const myCookbook =new Cookbook();

      myCookbook.addRecipe(`fajitas`, [`chicken`, `salsa`, `tortillas`]);
      const myRecipes = myCookbook.getRecipe(`fajitas`);

      expect(myRecipes).toEqual([`chicken`, `salsa`, `tortillas`]);
    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {
      const myCookbook = new Cookbook();

      
      myCookbook.addRecipe(`fajitas`, [`chicken`, `salsa`, `tortillas`]);
      myCookbook.removeRecipe(`fajitas`);
      const myRecipes = myCookbook.listRecipes();

      expect(myRecipes).toEqual([]);

    });
  });
});
