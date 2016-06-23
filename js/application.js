$(document).ready(function() {
  var current_nav = "index"

  $(".nav-link").on("click", function(){
    event.preventDefault();
  })

  $("#blog-nav").on("click", function(){
    if (current_nav != "blog"){
      console.log("#"+current_nav+"-container")
      $("#"+current_nav+"-container").slideUp(function() {
        $("#blog-container").slideDown();
      });
      current_nav = "blog";
    }
  });

  $("#about-nav").on("click", function(){
    if (current_nav != "about"){
      console.log("#"+current_nav+"-container")
      $("#"+current_nav+"-container").slideUp(function() {
        $("#about-container").slideDown();
      });
      
      current_nav = "about";
    };
  })

  $("#projects-nav").on("click", function(){
    if (current_nav != "projects"){
      console.log("#"+current_nav+"-container")
      $("#"+current_nav+"-container").slideUp(function() {
        $("#projects-container").slideDown();
      });
      
      current_nav = "projects";
    }
  })

  $("#game-nav").on("click", function(){
    if (current_nav != "game"){
      console.log("#"+current_nav+"-container")
      $("#"+current_nav+"-container").slideUp(function() {
        $("#game-container").slideDown();
      });
      
    };
    current_nav = "game";
    var game = new Game();
    var board = new Board();
    var currentBoardState = game.getBoard();
    board.getBoard(game.getArray());
    Mousetrap.bind('up', function() {
      event.preventDefault();
      var currentArray = game.getArray();
      if (_.contains(currentArray, "0" || 0) || game.isOver()==false){
        currentBoardState = game.getBoard();
        game.move("up")
        // var newBoardState = game.getBoard();
        if(currentBoardState != game.getBoard() ){
          game.spawnNew();
        }
        board.getBoard(game.getArray())
      }else{
        Mousetrap.unbind('up');
        $("#duckies-header").text("You Lost!");
        alert("You Lost Dingus!")
      }
    });
    Mousetrap.bind('down', function() {
      event.preventDefault();
      var currentArray = game.getArray();
      if (_.contains(currentArray, "0" || 0) || game.isOver()==false){
        currentBoardState = game.getBoard();
        game.move("down")
        // var newBoardState = game.getBoard();
        if(currentBoardState != game.getBoard() ){
          game.spawnNew();
        }
        board.getBoard(game.getArray())
      }else{
        Mousetrap.unbind('down');
        $("#duckies-header").text("You Lost!");
        alert("You Lost Dingus!")
      }
      });
    Mousetrap.bind('left', function() {
      event.preventDefault();
      var currentArray = game.getArray();
      if (_.contains(currentArray, "0" || 0) || game.isOver()==false){
        currentBoardState = game.getBoard();
        game.move("left")
        // var newBoardState = game.getBoard();
        if(currentBoardState != game.getBoard() ){
          game.spawnNew();
        }
        board.getBoard(game.getArray())
      }else{
        Mousetrap.unbind('left');
        $("#duckies-header").text("You Lost!");
        alert("You Lost Dingus!")
      }
    });
    Mousetrap.bind('right', function() {
      event.preventDefault();
      var currentArray = game.getArray();
      if (_.contains(currentArray, "0" || 0) || game.isOver()==false){
        currentBoardState = game.getBoard();
        game.move("right")
        // var newBoardState = game.getBoard();
        if(currentBoardState != game.getBoard() ){
          game.spawnNew();
        }
        board.getBoard(game.getArray())
      }else{
        Mousetrap.unbind('right');
        $("#duckies-header").text("You Lost!");
        alert("You Lost Dingus!")
      }
    });
});


});
