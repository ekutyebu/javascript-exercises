const leapYears = function(year) {
  if (year % 4 === 0 && (year % 100 !==0 || year % 400 === 0)) {
    year = true;
  } else if (year % 400 === 0) {
    year = true;
  } else if (year % 100 === 0 || year % 4 !== 0 || year % 400 !== 0) {
    year = false;
  }
  return year;
};

// Do not edit below this line
module.exports = leapYears;
