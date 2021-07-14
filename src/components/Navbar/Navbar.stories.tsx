import React from 'react'
import { Navbar } from '.'

export default {
  title: 'App/Navbar',
  component: Navbar
}
export function NavbarStories () {
  return (
    <div className={'fill-container'}>
      <Navbar className='navbar' onToggle={() => { }} />
      <Navbar className='mobile-navbar' onToggle={() => { }} />
    </div>
  )
}
