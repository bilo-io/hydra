import { keys } from '../crypto'

describe('Crypto', () => {
    test('Has coins (22)', () => {
        expect(keys?.length).toBe(22)
    })
})
