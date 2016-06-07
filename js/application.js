$(document).ready(function() {

    var game = new Game();
    var board = new Board();
    var currentBoardState = game.getBoard();
    board.getBoard(game.getArray());
    Mousetrap.bind('up', function() {
      var currentArray = game.getArray();
      if (_.contains(currentArray, "0" || 0)){
        currentBoardState = game.getBoard();
        game.move("up")
        // var newBoardState = game.getBoard();
        if(currentBoardState != game.getBoard() ){
          game.spawnNew();
        }
        board.getBoard(game.getArray())
      }else{
        Mousetrap.unbind('up');
        alert("You Lost Dingus!")
      }
    });
    Mousetrap.bind('down', function() {
      var currentArray = game.getArray();
      if (_.contains(currentArray, "0" || 0)){
        currentBoardState = game.getBoard();
        game.move("down")
        // var newBoardState = game.getBoard();
        if(currentBoardState != game.getBoard() ){
          game.spawnNew();
        }
        board.getBoard(game.getArray())
      }else{
        Mousetrap.unbind('up');
        alert("You Lost Dingus!")
      }
      });
    Mousetrap.bind('left', function() {
      var currentArray = game.getArray();
      if (_.contains(currentArray, "0" || 0)){
        currentBoardState = game.getBoard();
        game.move("left")
        // var newBoardState = game.getBoard();
        if(currentBoardState != game.getBoard() ){
          game.spawnNew();
        }
        board.getBoard(game.getArray())
      }else{
        Mousetrap.unbind('up');
        alert("You Lost Dingus!")
      }
    });
    Mousetrap.bind('right', function() {
      var currentArray = game.getArray();
      if (_.contains(currentArray, "0" || 0)){
        currentBoardState = game.getBoard();
        game.move("right")
        // var newBoardState = game.getBoard();
        if(currentBoardState != game.getBoard() ){
          game.spawnNew();
        }
        board.getBoard(game.getArray())
      }else{
        Mousetrap.unbind('up');
        alert("You Lost Dingus!")
      }
    });

});
