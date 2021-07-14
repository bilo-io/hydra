import useWindowSize from '../use-window-size'

describe('useWindowSize', () => {
    xtest('should have width and height', () => {
        jest.mock('react')
        jest.mock('react')
        jest.mock('../use-window-size.ts')

        const windowSize = useWindowSize()
        expect(windowSize?.width).toBeGreaterThan(0)
    })
})
