import { currencies, languages, language, currency } from '../locale'

describe('Locale', () => {
    describe('Currencies', () => {
        test('default currency: USD', () => {
            expect(currency.code).toBe('usd')
        })
        test('supported language count: 4', () => {
            expect(currencies.length).toBe(4)
        })

        test('supported currencies: usd,eur,gbp,zar', () => {
            expect(currencies.map(c => c.code)).toEqual(['usd', 'eur', 'gbp', 'zar'])
        })
    })

    describe('Languages', () => {
        test('default language: EN', () => {
            expect(language.code).toBe('en')
        })
        test('supported language count: 5', () => {
            expect(languages.length).toEqual(5)
        })

        test('supported languages: en,de,fr,it,nl', () => {
            expect(languages.map((l) => l.code)).toEqual([
                'en',
                'de',
                'fr',
                'it',
                'nl'
            ])
        })
    })
})
