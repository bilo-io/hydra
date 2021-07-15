import React from 'react'
import Stats from '.'
import { MemoryRouter } from 'react-router'

export default {
  title: 'Features/Stats',
  component: Stats,
  decorators: [(Story: any) => (<MemoryRouter><Story/></MemoryRouter>)]
}

export const StatsStories = () => {
  return (
    <div>
      <Stats />
    </div>
  )
}
