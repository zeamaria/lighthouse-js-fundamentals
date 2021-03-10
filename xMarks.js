function finalPosition(moves) {
 var x = 0;
 var y = 0;
 
 for(const move of moves) {
  if(move === 'north') {
    y = y + 1;
  }
  else if(move === 'south') {
    y = y - 1;
  }
  else if(move === 'west') {
    x = x - 1
  }
  else if(move === 'east') {
    x = x + 1
  }
 }

 return [x,y];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));




//for each move, move one spot on the grid
//if north, move y + 1
//if south, move y - 1