import { useAppDispatch, useAppSelector } from '../hooks'
describe('Hooks', () => {
  it('useAppDispatch exists', () => {
    expect(useAppDispatch).not.toBe(undefined)
  })

  it('useAppSelector exists', () => {
    expect(useAppSelector).not.toBe(undefined)
  })
})
