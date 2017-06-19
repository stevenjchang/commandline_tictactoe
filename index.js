//make a board (3 x 3 array)

//insert(x,y) function, will insert X or O at given coordinates

// [
//   [0,0,0],
//   [0,0,0],
//   [0,0,0]
// ]

//check for victory 
  //if all of current x is the same value OR all of current y is the same value
    //return current player wins

const Board = () => {
  var storage = [[0,0,0],[0,0,0],[0,0,0]];
  return storage;
}

Board.prototype.insert = (player, x, y) => {
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
}

