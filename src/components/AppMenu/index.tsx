import React from 'react';

function AppMenu(
  {
    isOpen,
    isDark,
    onToggle,
  }: {
    isOpen: boolean;
    isDark: boolean;
    onToggle: Function;
  }) {
  return (
    <div className={`app-menu ${isOpen ? '' : 'hidden'}`}>
      AppMenu
      <div className="top">
        <h1>User</h1>
      </div>
      <div className="content">
        <h3>About</h3>
        <h3>Logout</h3>
      </div>
    </div>
  );
}

export default AppMenu;
