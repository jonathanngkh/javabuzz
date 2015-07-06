describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz._isDivisibleBy(3, 3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javabuzz._isDivisibleBy(5, 5)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(javabuzz._isDivisibleBy(15, 15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(javabuzz._isDivisibleBy(1, 3)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz._isDivisibleBy(6, 5)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(javabuzz._isDivisibleBy(16,15)).toBe(false);
    });
  });

  describe('when playing, says', function() {
    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"Javabuzz" when a number is divisible by 15', function() {
      expect(javabuzz.says(15)).toEqual("Javabuzz");
    });

    it('the given number when the number is not divisible by 3, 5, or 15', function () {
      expect(javabuzz.says(1)).toEqual(1);
    });
  });
});