// @flow

const updatePeople = (value: number) => ({
  type: 'UPDATE_PEOPLE',
  payload: {
    value
  }
})

const updateSlices = (value: number) => ({
  type: 'UPDATE_SLICES',
  payload: {
    value
  }
})

const toogleBogof = () => ({
  type: 'TOOGLE_BOGOF'
})

export { updatePeople, updateSlices, toogleBogof }
