// @flow

type PizzaOptions = {
  slicesNeeded: number,
  bogof: boolean
}

const pizzaCalculator = ({ slicesNeeded, bogof }: PizzaOptions) => {
  const isWhole = n => n % 1 === 0
  const doubleIfBogof = value => (bogof ? 2 * value : value)
  const largeSlice = doubleIfBogof(10)
  const mediumSlice = doubleIfBogof(8)
  const solveMedium = (large, slices) =>
    (-largeSlice * large + slices) / mediumSlice
  const solveLarge = (slices, noOfPizzas) =>
    (slices - mediumSlice * noOfPizzas) / (largeSlice - mediumSlice)

  for (
    let slices = slicesNeeded;
    slices < slicesNeeded + largeSlice;
    slices++
  ) {
    let noOfPizzas = Math.floor(slices / largeSlice) - 1
    let noOfLarges = noOfPizzas + 1
    for (; noOfLarges > noOfPizzas - 1; noOfPizzas++) {
      noOfLarges = solveLarge(slices, noOfPizzas)
    }
    if (noOfLarges >= 0 && isWhole(noOfLarges)) {
      const medium = solveMedium(noOfLarges, slices)
      const pizzas = {
        large: doubleIfBogof(noOfLarges),
        medium: doubleIfBogof(medium)
      }
      const total = slices
      return { pizzas, total }
    }
  }
  return { pizzas: { large: 0, medium: 0 }, total: 0 }
}

export default pizzaCalculator
