// @flow

const mediumSlices = 8
const largeSlices = 10

const calculateSlices = ({ medium, large }) => {
  return medium * mediumSlices + large * largeSlices
}

type pizzaCalculatorArgs = {
  slicesNeeded: number,
  bogof: boolean
}

const pizzaCalculator = ({ slicesNeeded, bogof } : pizzaCalculatorArgs) => {
  const toChange = bogof ? 2 : 1
  let total = 0
  const pizzas = { large: 0, medium: 0 }
  let numberOfPizzas = 0
  while (slicesNeeded > total) {
    if (pizzas.large === numberOfPizzas) {
      numberOfPizzas += toChange
      pizzas.medium = numberOfPizzas
      pizzas.large = 0
    } else {
      pizzas.medium -= toChange
      pizzas.large += toChange
    }
    total = calculateSlices(pizzas)
  }
  return { pizzas, total }
}

export default pizzaCalculator
