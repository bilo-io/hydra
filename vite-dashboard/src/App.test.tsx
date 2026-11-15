import { cleanup, render, waitFor } from '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import App from './App'

afterEach(cleanup)

test('renders the app root without crashing', async () => {
  const { container } = render(<App />)
  await waitFor(() => expect(container.querySelector('nav, main, div div')).not.toBeNull())
})
