const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
  it("should take a string as an argument and return a new reversed version of the string")
    const str = "car"
    const reverse = "rac"

    const result = new Algo().reverse(str);

    expect(result).toEqual(reverse)
    

  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("should take a string as an argument and return the boolean `true` if the provided string is a palindrome")
    const str = "RACECAR"

    const result = new Algo().isPalindrome(str);

    expect(result).toEqual(true)
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it("should take a string as an argument and return a new string with the first letter of each word capitalized")
    const str = "neon"


    const result = new Algo().capitalize(str);

    expect(result).toEqual(false)
  });
});
