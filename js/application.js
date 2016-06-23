$(document).ready(function() {
  var current_nav = "index"

  $(".nav-link").on("click", function(){
    event.preventDefault();
  })

  $("#blog-nav").on("click", function(){
    if (current_nav != "blog"){
      $("#"+current_nav+"-container").slideUp();
      $("#blog-container").slideDown();
      current_nav = "blog";
    }
  });

  $("#about-nav").on("click", function(){
    if (current_nav != "about"){
      $("#"+current_nav+"-container").slideUp();
      $("#about-container").slideDown();
      current_nav = "about";
    };
  })

  $("#projects-nav").on("click", function(){
    if (current_nav != "projects"){
      $("#"+current_nav+"-container").slideUp();
      $("#projects-container").slideDown();
      current_nav = "projects";
    }
  })

  $("#game-nav").on("click", function(){
    if (current_nav != "game"){
      $("#"+current_nav+"-container").slideUp();
      $("#game-container").slideDown();
    };
    current_nav = "game";
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


});
