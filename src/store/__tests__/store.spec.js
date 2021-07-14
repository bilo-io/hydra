import { AppDispatch, RootState } from '../'

describe('Store', () => {
  it('AppDispatch exists', () => {
    expect(typeof AppDispatch).not.toBe(undefined)
  })

  it('RootState exists', () => {
    expect(typeof RootState).not.toBe(undefined)
  })
})
