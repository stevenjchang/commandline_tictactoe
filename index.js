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
  var board = new Board();

  prompt.get(['player', 'x', 'y'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  players turn: ' + result.player);
    console.log('  x coordinate: ' + result.x);
    console.log('  y coordinate: ' + result.y);
  });

  

}

PlayRound();

