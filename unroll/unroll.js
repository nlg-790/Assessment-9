function unroll(squareArray) {
  const result = [];

  while (squareArray.length > 0) {
    // Move right
    result.push(...squareArray.shift());

    // Move down
    for (let i = 0; i < squareArray.length - 1; i++) {
      result.push(squareArray[i].pop());
    }

    // Move left
    if (squareArray.length > 0) {
      result.push(...squareArray.pop().reverse());
    }

    // Move up
    for (let i = squareArray.length - 1; i >= 0; i--) {
      result.push(squareArray[i].shift());
    }
  }

  return result;
}

module.exports = unroll;

  