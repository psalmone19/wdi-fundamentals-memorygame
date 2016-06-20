var cells = function(key) {
  switch(key) {
    case 'a': return null;
    case 'b': return null;
    case 'c': return 'x';
    case 'd': return null;
    case 'e': return 'o';
    case 'f': return null;
    case 'g': return null;
    case 'h': return 'o';
    case 'i': return 'x';
    default : return null;
  }
}

var getWinner = function() {
  debugger;
  var x = 1;
  var y = x * 2;

  if (isWinnerX()) {
    return 'x';
  }
  if (isWinnerO()) {
    return 'o';
  }
  return null;
}

var isWinnerX = function() {
  return winsRowX() || winsColumnX() || winsDiagonalX();
}

var winsRowX = function() {
  return allThreeX(cells('a'), cells('b'), cells('c')) ||
         allThreeX(cells('d'), cells('e'), cells('f')) ||
         allThreeX(cells('g'), cells('h'), cells('i'));
}

var winsColumnX = function() {
  return allThreeX(cells('a'), cells('d'), cells('g')) ||
         allThreeX(cells('b'), cells('e'), cells('h')) ||
         allThreeX(cells('c'), cells('f'), cells('i'));
}

var winsDiagonalX = function() {
  return allThreeX(cells('a'), cells('e'), cells('i')) ||
         allThreeX(cells('c'), cells('e'), cells('g'));
}

var allThreeX = function(cellOne, cellTwo, cellThree) {
  return cellOne === cellTwo && cellTwo === cellThree;
}
