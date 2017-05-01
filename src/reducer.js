// @flow

const defaultState = { people: 0, slices: 0, bogof: true }
type State = {
  people: number,
  slices: number,
  bogof: boolean
}

type Action = {
  type: string,
  payload: Object
}

const reducer = (state: State = defaultState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_PEOPLE':
      return Object.assign({}, state, { people: action.payload.value })
    case 'UPDATE_SLICES':
      return Object.assign({}, state, { slices: action.payload.value })
    case 'TOOGLE_BOGOF':
      return Object.assign({}, state, { bogof: !state.bogof })
    default:
      return state
  }
}

export default reducer
