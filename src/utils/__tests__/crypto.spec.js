import { keys } from '../crypto'

describe('Crypto', () => {
    test('Has coins :', () => {
        expect(keys.length).toBe(12)
    })
})
