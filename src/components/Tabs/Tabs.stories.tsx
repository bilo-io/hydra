import React from 'react'
import { Tabs } from '.'

export default {
    title: 'Core/Tabs',
    component: Tabs
}

export function TabsStories () {
    return (
        <div>
            <Tabs
                isOpen={true} isDark onToggle={() => { }} keys={['tab-1', 'tab-2', 'tab-3']}
                tab-1= {
                    <div >
                        Tab 1 Content
                    </div>
                }
                tab-2= {
                    <div >
                        Tab 2 Content
                    </div>
                }
                tab-3= {
                    <div >
                        Tab 3 Content
                    </div>
                }
            />
        </div>
    )
}
