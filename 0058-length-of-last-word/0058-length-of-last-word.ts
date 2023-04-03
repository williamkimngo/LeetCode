function lengthOfLastWord(s: string): number {
  let i = s.length;
  let count = 0;
  
  while (i--) {
    if (s[i] === ' ') {
      if (count === 0) { continue; } else { break; }
    } else {
      count += 1;
    }
  }
  
  return count;
};