import { expect } from 'chai';

import pizzaCalculator from '../src/pizzaCalculator';

describe("Pizza Calculator", () => {
  it("Should return an object representing the amount of Pizza needed", () => {

    expect(pizzaCalculator({ slicesNeeded: 12 })).to.deep.equal({ large: 0, medium: 2 })
    expect(pizzaCalculator({ slicesNeeded: 42 })).to.deep.equal({ large: 1, medium: 4 })
  })
  it("Should return an object representing the amount of Pizza needed when bogof offer is on", () => {
    expect(pizzaCalculator({ slicesNeeded: 12, bogof: true })).to.deep.equal({ large: 0, medium: 2 })
    expect(pizzaCalculator({ slicesNeeded: 42, bogof: true })).to.deep.equal({ large: 0, medium: 6 })
  })
})
