module.exports = function countCats(backyard) {
  var number = 0;
    for (var i = 0; i < backyard.length; i ++) {
      number += backyard[i].filter(el => el === "^^").length;
    }
  return number;
};
