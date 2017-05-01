const updatePeople = value => ({
  type: 'UPDATE_PEOPLE',
  payload: {
    value
  }
})

const updateSlices = value => ({
  type: 'UPDATE_SLICES',
  payload: {
    value
  }
})

const toogleBogof = () => ({
  type: 'TOOGLE_BOGOF'
})

export { updatePeople, updateSlices, toogleBogof }
