import { updatePeople, updateSlices, toogleBogof } from './actions'

describe('actions', () => {
  describe('updatePeople', () => {
    it('returns an action to update people', () => {
      const action = updatePeople(4)
      expect(action.type).toBe('UPDATE_PEOPLE')
      expect(action.payload.value).toBe(4)
    })
  })
  describe('updateSlices', () => {
    it('returns an action to update slices', () => {
      const action = updateSlices(7)
      expect(action.type).toBe('UPDATE_SLICES')
      expect(action.payload.value).toBe(7)
    })
  })
  describe('toogleBogof', () => {
    it('returns an action to toogle bogof', () => {
      const action = toogleBogof()
      expect(action.type).toBe('TOOGLE_BOGOF')
    })
  })
})
