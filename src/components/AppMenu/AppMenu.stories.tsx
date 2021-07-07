import React from 'react';
import AppMenu from '.'

export default {
  title: 'AppMenu',
  component: AppMenu,
}

export function AppMenuStories() {
  return (
    <div>
      <AppMenu isOpen={true} isDark onToggle={() => { }}/>
    </div>
  );
}
