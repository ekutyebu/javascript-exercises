const removeFromArray = function(array, ...argu) {

  const newArray = [];

  array.forEach((items) => {
    if (!argu.includes(items)) {
      newArray.push(items);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
