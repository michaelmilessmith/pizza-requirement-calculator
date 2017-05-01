import pizzaCalculator from './pizzaCalculator'

const helper = pizzaArgs => pizzaCalculator(pizzaArgs).pizzas
describe('Pizza Calculator', () => {
  it('Should return an object representing the amount of Pizza needed', () => {
    expect(helper({ slicesNeeded: 0 })).toEqual({
      large: 0,
      medium: 0
    })
    expect(helper({ slicesNeeded: 12 })).toEqual({
      large: 0,
      medium: 2
    })
    expect(helper({ slicesNeeded: 42 })).toEqual({
      large: 1,
      medium: 4
    })
    expect(helper({ slicesNeeded: 98 })).toEqual({
      large: 9,
      medium: 1
    })
  })
  it('Should return an object representing the amount of Pizza needed when bogof offer is on', () => {
    expect(helper({ slicesNeeded: 0, bogof: true })).toEqual({
      large: 0,
      medium: 0
    })
    expect(helper({ slicesNeeded: 12, bogof: true })).toEqual({
      large: 0,
      medium: 2
    })
    expect(helper({ slicesNeeded: 42, bogof: true })).toEqual({
      large: 0,
      medium: 6
    })
    expect(helper({ slicesNeeded: 90, bogof: true })).toEqual({
      large: 6,
      medium: 4
    })
  })
})
