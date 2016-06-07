describe("Game", function(){
  var game;

  beforeEach(function() {
    game = new Game();
  });
  it("should initialize with a random gameboard that is a string", function(){
    expect(game.getBoard()).toBeDefined();
  }
}})
