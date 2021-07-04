import React from 'react';
import FAIcon from 'react-fontawesome'
import { useHistory } from 'react-router';
import pkg from '../../../package.json';

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
  const history = useHistory()
  const goTo = (path: string) => history.push(path)

  const dividerStyle = {
      width: '16rem',
      margin: 'auto',
      marginTop: '1rem',
      marginBottom: '1rem'
  }



  return (
    <div className={`app-menu ${isOpen ? '' : 'hidden'} ${isDark ? 'dark' : 'light'}`}>
      <div className="top">

      </div>
      <div className="content">

        <div className="title">{'Hydra'}</div>

        <div className='link' onClick={ () => goTo('/')}>
            <FAIcon name='home' />&nbsp;&nbsp;
            Home
        </div>

        <div className='link' onClick={ () => goTo('/app/identity/profile')}>
            <FAIcon name='user' />&nbsp;&nbsp;
            Account
        </div>

        <div className='divider horizontal' style={ dividerStyle } />

            Apps

        <div className='divider horizontal' style={ dividerStyle } />

        <div className='link' onClick={ () => {} }>
            <FAIcon name='info-circle' />&nbsp;&nbsp;
            About
        </div>

        <div className='divider horizontal' style={dividerStyle} />

        <div className='link' onClick={() => { } }>
            <FAIcon name='door-open' />&nbsp;&nbsp;
            Log Out
        </div>


        <div className="version">{pkg.version}</div>
      </div>

      <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}
        onClick={() => {
          onToggle()
        }}>
        <FAIcon name={'times'} />
      </div>
    </div>
  );
}

export default AppMenu;
