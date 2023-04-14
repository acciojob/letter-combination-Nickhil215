function letterCombinations(digits) {
  if (!digits) {
    return [];
  }

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

  if (digits.length === 1) {
    return map[digits].split('');
  }

  const first = map[digits[0]];
  const suffix = digits.slice(1);
  const suffixCombinations = letterCombinations(suffix);
  const result = [];

  for (let i = 0; i < first.length; i++) {
    const letter = first[i];

    for (let j = 0; j < suffixCombinations.length; j++) {
      result.push(letter + suffixCombinations[j]);
    }
  }

  return result;
}
