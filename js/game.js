function Board(){

}

Board.prototype.getBoard = function(gameBoard){
  for(i=0;i<16;i++){
    if(gameBoard[i] ==2 ){
    $("#"+i.toString()).css("background-image", "url('img/2duck.jpg')")
  }else if(gameBoard[i] ==4 ){
    $("#"+i.toString()).css("background-image", "url('img/4duck.jpg')")
  }else if(gameBoard[i] ==8 ){
    $("#"+i.toString()).css("background-image", "url('img/8duck.jpg')")
  }else if(gameBoard[i] ==16 ){
    $("#"+i.toString()).css("background-image", "url('img/16duck.jpg')")
  }else if(gameBoard[i] ==32 ){
    $("#"+i.toString()).css("background-image", "url('img/32duck.jpg')")
  }else if(gameBoard[i] ==64 ){
    $("#"+i.toString()).css("background-image", "url('img/64duck.jpg')")
  }else if(gameBoard[i] ==128 ){
    $("#"+i.toString()).css("background-image", "url('img/128duck.jpg')")
  }else if(gameBoard[i] ==256 ){
    $("#"+i.toString()).css("background-image", "url('img/256duck.jpg')")
  }else if(gameBoard[i] ==0 ){
    $("#"+i.toString()).css("background-image", "url('img/transparent.png')")
  }else{
    $("#"+i.toString()).css("background-image", "url('img/512duck.jpg')")
  }
  }
}

function Game(startBoard){
  var board = startBoard || this.generateBoard();
  var boardArray = board.split("");
  this.getBoard = function(){
    return board;
  }
  this.setBoard = function(newBoard){
    board = newBoard;
  }
  this.getArray = function(){
    return boardArray;
  }
  this.setArray = function(newBoard){
    boardArray = newBoard;
  }
}

Game.prototype.generateBoard = function(){
  var blankBoard = ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
  var startingValsArray = ["2","2","2","2","2","4"]
  var firstIndexToSub = Math.floor((Math.random() * 15) + 1);
  var secondIndexToSub = firstIndexToSub;
  while (secondIndexToSub == firstIndexToSub){
    secondIndexToSub = Math.floor((Math.random() * 15) + 1);
  };
  blankBoard[firstIndexToSub] = _.sample(startingValsArray, 1);
  blankBoard[secondIndexToSub] = _.sample(startingValsArray, 1);
  generatedBoard = blankBoard.join("");
  return generatedBoard;
}

Game.prototype.toString = function(){
  var boardArray = []
  var board = this.getArray();
  boardArray.push(board.slice(0,4).join("") + "\n");
  boardArray.push(board.slice(4,8).join("") + "\n");
  boardArray.push(board.slice(8,12).join("") + "\n");
  boardArray.push(board.slice(12,17).join("") + "\n");
  return boardArray.join("");
}

Game.prototype.move = function(direction){
  var currentBoard = this.getArray();
  switch(direction) {
    case "left":
    var checkOrder=[1,5,9,13,2,6,10,14,3,7,11,15]
    // var checkMatches=[3,7,11,15,2,6,10,14,1,5,9,13]
    var thisGame = this;
    checkOrder.forEach(function(index){
      if ((thisGame.checkDirectionNeighbor(index, direction))===0){
        if ((thisGame.checkDirectionNeighbor(index-1, direction))===0){
          if ((thisGame.checkDirectionNeighbor(index-2, direction))===0){
            currentBoard[index-3] = currentBoard[index];
            currentBoard[index] = "0";
          }
          currentBoard[index-2] = currentBoard[index];
          currentBoard[index] = "0";
        }
        currentBoard[index-1] = currentBoard[index];
        currentBoard[index] = "0";
      };
    })
    checkOrder.forEach(function(index){
        if ((thisGame.checkDirectionNeighbor(index, direction))==parseInt(currentBoard[index])){
          if ((thisGame.checkDirectionNeighbor(index-1, direction))==parseInt(currentBoard[index])){
            currentBoard[index-2] = (parseInt(currentBoard[index])*2);
            currentBoard[index-1] = currentBoard[index];
            currentBoard[index] = "0";
          }else{
          currentBoard[index-1] = (parseInt(currentBoard[index])*2);
          currentBoard[index] = "0";
          }
        }
      })
    checkOrder.forEach(function(index){
      if ((thisGame.checkDirectionNeighbor(index, direction))===0){
        if ((thisGame.checkDirectionNeighbor(index-1, direction))===0){
          if ((thisGame.checkDirectionNeighbor(index-2, direction))===0){
            currentBoard[index-3] = currentBoard[index];
            currentBoard[index] = "0";
          }
          currentBoard[index-2] = currentBoard[index];
          currentBoard[index] = "0";
        }
        currentBoard[index-1] = currentBoard[index];
        currentBoard[index] = "0";
      };
    })
      break;
    case "right":
    var checkOrder=[2,6,10,14,1,5,9,13,0,4,8,12]
    // var checkMatches= [0,4,8,12,1,5,9,13,2,6,10,14]
    var thisGame = this;
    checkOrder.forEach(function(index){
      if ((thisGame.checkDirectionNeighbor(index, direction))===0){
        if ((thisGame.checkDirectionNeighbor(index+1, direction))===0){
          if ((thisGame.checkDirectionNeighbor(index+2, direction))===0){
            currentBoard[index+3] = currentBoard[index];
            currentBoard[index] = "0";
          }
          currentBoard[index+2] = currentBoard[index];
          currentBoard[index] = "0";
        }
        currentBoard[index+1] = currentBoard[index];
        currentBoard[index] = "0";
      };
    })
    checkOrder.forEach(function(index){
        if ((thisGame.checkDirectionNeighbor(index, direction))==parseInt(currentBoard[index])){
          if ((thisGame.checkDirectionNeighbor(index+1, direction))==parseInt(currentBoard[index])){
            currentBoard[index+2] = (parseInt(currentBoard[index])*2);
            currentBoard[index+1] = currentBoard[index];
            currentBoard[index] = "0";
          }else{
          currentBoard[index+1] = (parseInt(currentBoard[index])*2);
          currentBoard[index] = "0";
          }
        }
      })
    checkOrder.forEach(function(index){
      if ((thisGame.checkDirectionNeighbor(index, direction))===0){
        if ((thisGame.checkDirectionNeighbor(index+1, direction))===0){
          if ((thisGame.checkDirectionNeighbor(index+2, direction))===0){
            currentBoard[index+3] = currentBoard[index];
            currentBoard[index] = "0";
          }
          currentBoard[index+2] = currentBoard[index];
          currentBoard[index] = "0";
        }
        currentBoard[index+1] = currentBoard[index];
        currentBoard[index] = "0";
      };
    })
      break;
    case "up":
    var checkOrder=[4,5,6,7,8,9,10,11,12,13,14,15]
    // var checkMatches= [12,13,14,15,8,9,10,11,4,5,6,7]
    var thisGame = this;
    checkOrder.forEach(function(index){
      if ((thisGame.checkDirectionNeighbor(index, direction))===0){
        if ((thisGame.checkDirectionNeighbor(index-4, direction))===0){
          if ((thisGame.checkDirectionNeighbor(index-8, direction))===0){
            currentBoard[index-12] = currentBoard[index];
            currentBoard[index] = "0";
          }
          currentBoard[index-8] = currentBoard[index];
          currentBoard[index] = "0";
        }
        currentBoard[index-4] = currentBoard[index];
        currentBoard[index] = "0";
      };
    })
    checkOrder.forEach(function(index){
        if ((thisGame.checkDirectionNeighbor(index, direction))==parseInt(currentBoard[index])){
          if ((thisGame.checkDirectionNeighbor(index-4, direction))==parseInt(currentBoard[index])){
            currentBoard[index-8] = (parseInt(currentBoard[index])*2);
            currentBoard[index-4] = currentBoard[index];
            currentBoard[index] = "0";
          }else{
          currentBoard[index-4] = (parseInt(currentBoard[index])*2);
          currentBoard[index] = "0";
          }
        }
      })
    checkOrder.forEach(function(index){
      if ((thisGame.checkDirectionNeighbor(index, direction))===0){
        if ((thisGame.checkDirectionNeighbor(index-4, direction))===0){
          if ((thisGame.checkDirectionNeighbor(index-8, direction))===0){
            currentBoard[index-12] = currentBoard[index];
            currentBoard[index] = "0";
          }
          currentBoard[index-8] = currentBoard[index];
          currentBoard[index] = "0";
        }
        currentBoard[index-4] = currentBoard[index];
        currentBoard[index] = "0";
      };
    })
      break;
    case "down":
      var checkOrder=[8,9,10,11,4,5,6,7,0,1,2,3]
      // var checkMatches=[0,1,2,3,4,5,6,7,8,9,10,11]
      var thisGame = this;
      checkOrder.forEach(function(index){
        if ((thisGame.checkDirectionNeighbor(index, direction))===0){
          if ((thisGame.checkDirectionNeighbor(index+4, direction))===0){
            if ((thisGame.checkDirectionNeighbor(index+8, direction))===0){
              currentBoard[index+12] = currentBoard[index];
              currentBoard[index] = "0";
            }
            currentBoard[index+8] = currentBoard[index];
            currentBoard[index] = "0";
          }
          currentBoard[index+4] = currentBoard[index];
          currentBoard[index] = "0";
        }
      })
      checkOrder.forEach(function(index){
        if ((thisGame.checkDirectionNeighbor(index, direction))==parseInt(currentBoard[index])){
          if ((thisGame.checkDirectionNeighbor(index+4, direction))==parseInt(currentBoard[index])){
            currentBoard[index+8] = (parseInt(currentBoard[index])*2);
            currentBoard[index+4] = currentBoard[index];
            currentBoard[index] = "0";
          }else{
          currentBoard[index+4] = (parseInt(currentBoard[index])*2);
          currentBoard[index] = "0";
          }
        }
      })
      checkOrder.forEach(function(index){
        if ((thisGame.checkDirectionNeighbor(index, direction))===0){
          if ((thisGame.checkDirectionNeighbor(index+4, direction))===0){
            if ((thisGame.checkDirectionNeighbor(index+8, direction))===0){
              currentBoard[index+12] = currentBoard[index];
              currentBoard[index] = "0";
            }
            currentBoard[index+8] = currentBoard[index];
            currentBoard[index] = "0";
          }
          currentBoard[index+4] = currentBoard[index];
          currentBoard[index] = "0";
        }
      })
      break;
  }
  this.setArray(currentBoard);
  this.setBoard(currentBoard.join(''));
}

Game.prototype.isOnEdge = function(index, direction){
  if (direction == "left" && _.contains([0,4,8,12], index)){
    return true
  }else if (direction == "right" && _.contains([3,7,11,15], index)){
    return true
  }else if (direction == "up" && _.contains([0,1,2,3], index)){
    return true
  }else if (direction == "down" && _.contains([12,13,14,15], index)){
    return true
  } else {
    return false}
}

Game.prototype.directionValue = function(direction){
  if(direction == "up"){
    return -4;
  }
  if(direction == "down"){
    return 4;
  }
  if(direction == "left"){
    return -1;
  }
  if(direction == "right"){
    return 1;
  }
}

Game.prototype.checkDirectionNeighbor = function(index, direction){
  var neighborValue = 0;
  if (this.isOnEdge(index, direction) == false){
    var neighborValue = this.getArray()[index + this.directionValue(direction)]
    return parseInt(neighborValue);
  } else {
    return null;
  };
}

Game.prototype.isOver = function(){
  var moveCount = 0;
  var directionArray = ["up", "down", "left","right"]
  var that = this;
  for( i=0 ; i<16 ; i++ ){
    directionArray.forEach(function(direction){
      if(that.getArray()[i]==that.checkDirectionNeighbor(i,direction)){
        moveCount = moveCount + 1;
      }

    })
  }
  if(moveCount == 0){
    return true;
  }else{
    return false;
  }
}

Game.prototype.spawnNew = function(){
  var currentBoard = this.getArray();
  var zeroSlots = []
  for (var index = 0; index < 16; index++){
    if (currentBoard[index]=="0"){
      zeroSlots.push(index);
    }
  }
  currentBoard[parseInt(_.sample(zeroSlots, 1)[0])]=_.sample(["2","2","2","2","2","4"], 1)[0];
  this.setBoard(currentBoard.join(""));
  this.setArray(currentBoard);
  return currentBoard;
}
