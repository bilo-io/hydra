import { keys } from '../crypto'

describe('Crypto', () => {
  test('Has coins (21)', () => {
    expect(keys?.length).toBe(21)
  })
})
