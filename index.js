var prompt = require('prompt');

var Board = function() {
  var storage = [[0,0,0],[0,0,0],[0,0,0]];
  return storage;
}

Board.prototype = {
  insert: function(player, x, y) {
    this.storage[x][y] = player;
    //check if player has won
    if (this.storage[x][0] === player, 
        this.storage[x][1] === player, 
        this.storage[x][2] === player ||
        this.storage[0][y] === player,
        this.storage[1][y] === player,
        this.storage[2][y] === player) {
          return player + " has Won!";
    }
  },
  revert: function() {
    console.log('reverted');
  }
}

var PlayRound = function() {
  var roundOver = false;
  var currentPlayer = 1;
  var board = new Board();

  prompt.get(['player', 'x', 'y'], function (err, result) {
    console.log('player ones turn');
    console.log('  players turn: ' + result.player);
    console.log('  x coordinate: ' + result.x);
    console.log('  y coordinate: ' + result.y);
  });

  while (roundOver === false) {

    if (currentPlayer === 1) {
      console.log('Player 1, enter your move')
      prompt.get(['x', 'y'], function(err, result) {
        console.log(' player1 placed X on: ' + result.x + ', ' + result.y);
        board.insert(1, result.x, result.y)
      });
      currentPlayer = 2;
    } 
    else if (currentPlayer === 2){
      console.log('Player 2, enter your move')
      prompt.get(['x', 'y'], function(err, result) {
        console.log(' player2 placed X on: ' + result.x + ', ' + result.y);
        board.insert(2, result.x, result.y)
      });
      currentPlayer = 1;
    }
  }
}

PlayRound();

