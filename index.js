function sumItems(array) {
  // Sum all the numbers in the array
  if (array.length === 0) {
    return;
  }

  let sum = 0;
  for (let item of array) {
    // recursive case
    if (Array.isArray(item)) {
      // if empty array
      if (item.length === 0) {
        sum += 0;
      } else {
        // if nested array
        sum += sumItems(item);
      }
    } else {
      // if not an array or we've reached the end of the nesting
      sum += item;
    }
  }

  return sum;
}

module.exports = sumItems;
