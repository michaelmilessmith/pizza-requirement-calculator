const mediumSlices = 8
const largeSlices = 10

const pizzaCalculator = ({ slicesNeeded, bogof }) => {
  const toChange = bogof ? 2 : 1
  let total = 0
  const pizzas = { large: 0, medium: 0 }
  let numberOfPizzas = 0
  while(slicesNeeded > total){
    if(pizzas.large === numberOfPizzas) {
      numberOfPizzas += toChange
      pizzas.medium = numberOfPizzas
      pizzas.large = 0
    } else {
      pizzas.medium -= toChange
      pizzas.large += toChange
    }
    total = pizzas.medium * mediumSlices + pizzas.large * largeSlices
  }
  return pizzas
}

export default pizzaCalculator
