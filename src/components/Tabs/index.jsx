/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { TabsComponent } from './TabsComponent'

export const Tabs = ({ keys, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(undefined)
  const [activeTabIndex, setActiveTabIndex] = useState(undefined)

  useEffect(() => {
    setActiveTab(defaultTab)
    setActiveTabIndex(keys?.findIndex(defaultTab) || 0)
  }, [[]])

  return (
    <div>
      <TabsComponent
        items={keys}
        activeIndex={activeTabIndex}
        onClickItem={(item, i) =>
          this.setState({ activeTab: item, activeTabIndex: i })
        }
      />
      <div>{activeTab && this.props[activeTab]}</div>
    </div>
  )
}

Tabs.defaultProps = {
  keys: []
}

export default Tabs
