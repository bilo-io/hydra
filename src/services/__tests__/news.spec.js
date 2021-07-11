import { getHeadlines, categories, countries } from '../news'
// @ts-ignore
// eslint-disable-next-line no-undef
// jest.mock('axios')

describe('API.News', () => {
    test('getHeadlines(country, query)', () => {
        getHeadlines({ country: countries[0], category: categories[0], limit: 2, query: 'bitcoin' }).then((response) => {
            expect(response.data.length).toBe(2)
        })
    })

    test('getHeadlines()', () => {
        getHeadlines({
            limit: 2,
            query: 'bitcoin'
        }).then((response) => {
            expect(response.data.length).toBe(2)
        })
    })
})
