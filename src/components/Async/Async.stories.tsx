import React from 'react'
import Async from '.'
import { noop } from '../../utils/misc'

export default {
  title: 'Core/Async',
  component: Async
}

export function AsyncStories () {
  return (
    <div>
      <div>Loading</div>
      <Async isLoading isDark onToggle={noop}>
                You should not be able to see this.
      </Async>

      <div>Success</div>
      <Async isLoading isDark onToggle={noop}>
                You should be able to see this.
      </Async>

      <div>Error</div>
      <Async isLoading isDark onToggle={noop}>
                You should see the error being handled here.
      </Async>
    </div>
  )
}
