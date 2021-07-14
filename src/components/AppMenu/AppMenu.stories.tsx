import React from 'react'
import AppMenu from '.'

export default {
  title: 'App/AppMenu',
  component: AppMenu
}

export function AppMenuStories () {
  return (
    <div>
      <AppMenu isOpen isDark onToggle={() => { }}/>
    </div>
  )
}
