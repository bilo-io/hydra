import React from 'react'
import { useHistory } from 'react-router'
import FAIcon from 'react-fontawesome'

function Navbar() {
  const history = useHistory()
  const goTo = (path: string) => history.push(path)

  const items = [
    {
      name: 'Explore',
      path: '/explore',
      icon: 'search'
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
      icon: 'user',
      main: true
    },
    {
      name: 'Stats',
      path: '/stats',
      icon: 'chart-pie'
    }
  ]

    return (
        <div className="mobile-navbar flex-row space-between">
            {
                (items || []).map((item, i) => {
                    const isActive = window.location.pathname.includes(item.path)
                    return (
                        <div
                            onClick={() => goTo(item.path)}
                            className={ item.main ? 'main-tab' : 'normal-tab'}
                        >
                            {
                                // item.main ? (
                                    // <img src={ appLogo } style={{ width: '3rem', height: 'auto' }} alt="logo/>
                                // ) : (
                                    <FAIcon name={item.icon} style={{ color: isActive ? '#FF4165' : '#AAA' }}/>
                                // )
                            }
                        </div>
                    )
                }
                )
            }
        </div>
  )
}

export default Navbar
