import { expect } from 'chai';

import pizzaCalculator from '../src/pizzaCalculator';

describe("Pizza Calculator", () => {
  it("Should return an object representing the amount of Pizza needed", () => {
    expect(pizzaCalculator({ numberOfSlices: 4, people: 3})).to.deep.equal({ large: 0, medium: 2 })
    expect(pizzaCalculator({ numberOfSlices: 7, people: 6})).to.deep.equal({ large: 1, medium: 4 })
  })
  it("Should return an object representing the amount of Pizza needed when bogof offer is on", () => {
    expect(pizzaCalculator({ numberOfSlices: 4, people: 3})).to.deep.equal({ large: 0, medium: 2 })
    expect(pizzaCalculator({ numberOfSlices: 7, people: 6, bogof: true })).to.deep.equal({ large: 0, medium: 6 })
  })
})
