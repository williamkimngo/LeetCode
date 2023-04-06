function addBinary(a: string, b: string): string {
  let result = ""
  let carry = 0
  let length = Math.max(a.length, b.length)
  let i = 1
  const its = []

  while (i <= length) {
    let x = Number(a[a.length - i] || 0)
    let y = Number(b[b.length - i] || 0)
    let sum = x + y + carry

    carry = sum > 1 ? 1 : 0
    result = (sum % 2) + result

    its.push({ i, x, y, carry, sum, result })
    i++
  }

  if (carry) { result = carry.toString(2) + result }
  return result
}