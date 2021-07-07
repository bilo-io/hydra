import React from 'react';
import { Tabs } from '.'

export default {
  title: 'Tabs',
  component: Tabs,
}

export function TabsStories() {
  return (
    <div>
      <Tabs isOpen={true} isDark onToggle={() => { }}/>
    </div>
  );
}
