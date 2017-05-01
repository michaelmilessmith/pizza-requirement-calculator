// @flow

const defaultState = { people: 0, slices: 0, bogof: true }
type stateArgs = {
  people: number,
  slices: number,
  bogof: boolean
}

const reducer = (state: stateArgs = defaultState, action: Object) => {
  switch (action.type) {
    case 'UPDATE_PEOPLE':
      return Object.assign({}, state, { people: action.value })
    case 'UPDATE_SLICES':
      return Object.assign({}, state, { slices: action.value })
    case 'TOOGLE_BOGOF':
      return Object.assign({}, state, { bogof: !state.bogof })
    default:
      return state
  }
}

export default reducer
