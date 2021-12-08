const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
      const myNewCookbook = new Cookbook();
      const myNewCookbookCli = new CookbookCli(myNewCookbook);

      const message = myNewCookbookCli.add(`fajitas`, [`chicken`, `tortillas`]);

      expect(message).toEqual(`Successfully added the following recipe: fajitas`);
    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {
      const myNewCookbook = new Cookbook();
      const myNewCookbookCli = new CookbookCli(myNewCookbook);

      myNewCookbookCli.add(`fajitas`, [`chicken`, `tortillas`]);

      const message = myNewCookbookCli.list();

      expect(message).toEqual(`You have the following recipes: fajitas`);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {
      const myNewCookbook = new Cookbook();
      const myNewCookbookCli = new CookbookCli(myNewCookbook);

      myNewCookbookCli.add(`fajitas`, [`chicken`, `tortillas`]);

      const message = myNewCookbookCli.get(`fajitas`)

      expect(message).toEqual(`The ingredients for fajitas are: chicken,tortillas`)

    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {
      const myNewCookbook = new Cookbook();
      const myNewCookbookCli = new CookbookCli(myNewCookbook);

      myNewCookbookCli.add(`fajitas`, [`chicken`, `tortillas`]);

      const message = myNewCookbookCli.remove(`fajitas`);

      expect(message).toEqual(`Successfully removed the following recipe: fajitas`);
    });
  });
});
