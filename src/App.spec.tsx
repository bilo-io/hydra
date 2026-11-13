import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'

vi.mock('services/coingecko', () => ({
  fetchCoins: () => new Promise(() => {}),
  fetchChartData: () => new Promise(() => {}),
  fetchMarkets: () => new Promise(() => {})
}))

describe('App', () => {
  it('renders the navigation and the products page', () => {
    window.history.pushState({}, '', '/products')
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(screen.getAllByText('Explore').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Bitcoin').length).toBeGreaterThan(0)
  })
})
