import { keys } from '../crypto'

describe('Crypto', () => {
    test('Has coins (28)', () => {
        expect(keys?.length).toBe(28)
    })
})
