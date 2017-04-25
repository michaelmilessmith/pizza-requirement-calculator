const medium = 8
const large = 10


const pizzaCalculator = ({ numberOfSlices, people, bogof }) => {
  const minimum =  numberOfSlices * people
  const toAdd = bogof ? 2 : 1
  let total = 0
  const pizzas = [0,0]
  let numberOfPizzas = 0
  console.log({minimum,total})
  while(minimum > total){
    if(pizzas[1] === numberOfPizzas) {
      numberOfPizzas += toAdd
      pizzas[0] = numberOfPizzas
      pizzas[1] = 0
    } else {
      pizzas[0] -= toAdd
      pizzas[1] += toAdd
    }
    total = pizzas[0] * medium + pizzas[1] * large
  }
  return { large: pizzas[1], medium: pizzas[0] }
}

export default pizzaCalculator
