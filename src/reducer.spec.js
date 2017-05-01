import reducer from './reducer'

describe('reducer', () => {
  it('Updates the number of people', () => {
    const state = { people: 3 }
    const action = { type: 'UPDATE_PEOPLE', value: 6 }
    expect(reducer(state, action).people).toBe(6)
  })
  it('Updates the number of slices', () => {
    const state = { slices: 2 }
    const action = { type: 'UPDATE_SLICES', value: 7 }
    expect(reducer(state, action).slices).toBe(7)
  })
  it('Toogles the buy one get one free status', () => {
    const trueState = { bogof: true }
    const falseState = { bogof: false }
    const action = { type: 'TOOGLE_BOGOF' }
    expect(reducer(trueState, action).bogof).toBe(false)
    expect(reducer(falseState, action).bogof).toBe(true)
  })
})
