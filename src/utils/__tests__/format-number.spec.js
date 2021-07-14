import { withCommas } from '../format-number'

describe('Format number', () => {
  test('deals with 100', () => {
    expect(withCommas(100)).toBe('100')
  })

  test('deals with 1,000', () => {
    expect(withCommas(1_000)).toBe('1,000')
  })

  test('deals with 1,000,000', () => {
    expect(withCommas(1_000_000)).toBe('1,000,000')
  })
})
