import React from 'react'
import AppMenu from '.'
import { noop } from 'utils/misc'

export default {
  title: 'App/AppMenu',
  component: AppMenu
}

export function AppMenuStories () {
  return (
    <div>
      <AppMenu isOpen isDark onToggle={noop}/>
    </div>
  )
}
