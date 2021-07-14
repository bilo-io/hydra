import React from 'react'
import { Navbar } from '.'
import { noop } from 'utils/misc'

export default {
  title: 'App/Navbar',
  component: Navbar
}
export function NavbarStories () {
  return (
    <div className={'fill-container'}>
      <Navbar type='desktop' onToggle={noop} />
      <Navbar type='mobile' onToggle={noop} />
    </div>
  )
}
