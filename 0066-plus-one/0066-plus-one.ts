function plusOne(digits: number[]): number[] {
  const len = digits.length - 1;
      
  for(let i = len; i > -1; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      
      return digits;
    }
  }
  
  digits.length = len + 2;
  digits[0] = 1;  
  digits[digits.length - 1] = 0;  
  
  return digits;
};