describe("Game", function(){
  var game;

  it("should initialize a gameboard given a string of 16 digits", function(){
    game = new Game('0000202000000000');
    expect(game.getBoard()).toBeTruthy();
  });

  beforeEach(function() {
    game1 = new Game();
    game2 = new Game();
  });
  it("should initialize with a random gameboard if no input is given", function(){
    expect(game1.getBoard()).toBeTruthy();
  });

  it("should have a gameboard with 16 characters", function(){
    expect(game1.getBoard().length).toEqual(16);
  })

  it("should have a functioning toString method", function(){
    expect(game1.toString()).toBeTruthy();
  })

  it("should return an integer based on direction", function(){
    expect(game1.directionValue("up")).toEqual(-4);
    expect(game1.directionValue("down")).toEqual(4);
    expect(game1.directionValue("left")).toEqual(-1);
    expect(game1.directionValue("right")).toEqual(1);
  })

  it("should check its directional neighbor's value",function(){
    game = new Game('0400222000000000');
    expect(game.checkDirectionNeighbor(5, "left")).toEqual(2);
    expect(game.checkDirectionNeighbor(5, "up")).toEqual(4);
  })

  it("should move left",function(){
    game = new Game('2402222024020002');
    console.log(game.toString());
    console.log("move left")
    expect(game.move("left")).toEqual(2);
    game.spawnNew();
    console.log(game.toString());
    console.log("move up")
    game.move("up");
    console.log(game.toString());
  })

  it("can tell when something is on an edge",function(){
    game = new Game('0400222004004002');
    expect(game.isOnEdge(1,"left")).toEqual(false);
  })
});
