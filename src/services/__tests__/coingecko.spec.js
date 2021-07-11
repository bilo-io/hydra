import { fetchCoins, fetchChartData, fetchMarkets } from '../coingecko'
// @ts-ignore
// eslint-disable-next-line no-undef
// jest.mock('axios')

describe('API.Coingecko', () => {
    test('fetchCoins()', () => {
        fetchCoins().then((response) => {
            expect(response.data.length).toBe(0)
        })
    })

    test("fetchCoins('bitcoin')", () => {
        fetchCoins('bitcoin').then((response) => {
            expect(response.data.id).toBe('bitcoin')
        })
    })

    test("fetchChart('bitcoin')", () => {
        fetchChartData('bitcoin').then((response) => {
            expect(Object.keys(response.data.id)).toBe([
                'prices'
            ])
        })
    })

    test('fetchMarkets(\'usd\')', () => {
        fetchMarkets({ currencyCode: 'usd' }).then((response) => {
            expect(response.data.length).toBe(0)
        })
    })
})
