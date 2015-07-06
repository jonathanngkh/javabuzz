var Javabuzz = function() {};

Javabuzz.prototype.isDivisibleFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype.isDivisibleFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.says = function(number) {
  if (this.isDivisibleThree(number)) {
    return "Java";
  };
};