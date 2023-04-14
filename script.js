function letterCombinations(digits) {
  // Define the mapping of digits to letters
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  // Base case: empty input string
  if (digits.length === 0) {
    return [];
  }

  // Recursive case: split the input into a prefix and a suffix
  const prefix = digits[0];
  const suffix = digits.slice(1);

  // Recursively compute the letter combinations for the suffix
  const suffixCombinations = letterCombinations(suffix);

  // Generate the letter combinations for the prefix
  const prefixLetters = map[prefix];
  const prefixCombinations = [];

  for (let i = 0; i < prefixLetters.length; i++) {
    for (let j = 0; j < suffixCombinations.length; j++) {
      prefixCombinations.push(prefixLetters[i] + suffixCombinations[j]);
    }
  }

  // Return the letter combinations for the input string
  return prefixCombinations;
}


module.exports = letterCombinations;
