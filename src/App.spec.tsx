import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
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
    expect(screen.getAllByText('Portfolio').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Bitcoin').length).toBeGreaterThan(0)
  })

  it('renders the merged portfolio view on root route', () => {
    window.history.pushState({}, '', '/')
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(screen.getAllByText('Total Portfolio Value').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Holdings Breakdown').length).toBeGreaterThan(0)
  })
})
