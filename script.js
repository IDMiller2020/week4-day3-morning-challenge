function findFactors(number) {
  let factors = []
  for (let i=0; i <= number; i++) {
    if (number % i === 0) {
      factors.push(i)
    }
  }
  console.log(`The factors of ${number} are ${factors}`)
}

findFactors(12)
findFactors(15)
findFactors(17)