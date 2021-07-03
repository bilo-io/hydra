import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import FAIcon from 'react-fontawesome'
import appLogo from 'assets/img/hydra-icon.png'

function Navbar({ onToggle }: { onToggle: Function; }) {
  const history = useHistory()
  const goTo = (path: string) => history.push(path)
  const [activePath, setActivePath] = useState<any>(null)

  useEffect(() => {
    history.listen(() => setActivePath(history.location.pathname))
  })

  const items = [
    {
      name: 'Profile',
      path: '/profile',
      icon: 'user',
      onClick: () => onToggle()
    },
    {
      name: 'Explore',
      path: '/explore',
      icon: 'search',
      onClick: () => goTo('/explore')
    },
    {
      main: true,
      name: 'Portfolio',
      path: '/portfolio',
      icon: '',
      onClick: () => goTo('/portfolio'),
    },
    {
      name: 'Stats',
      path: '/stats',
      icon: 'chart-pie',
      onClick: () => goTo('/stats')
    },
    {
      name: 'News',
      path: '/news',
      icon: 'globe',
      onClick: () => goTo('/news')
    },
  ]

    return (
        <div className="mobile-navbar flex-row space-between">
            {
                (items || []).map((item, i) => {
                    // const isActive = window.location.pathname.includes(item.path)
                  const isActive = activePath?.includes(item.path)
                    return (
                      <div
                        key={i}
                        onClick={() => item.onClick()}
                          className={ item.main ? 'main-tab' : 'normal-tab'}
                        >
                            {
                                item.main ? (
                                    <img src={ appLogo } style={{ width: '3.2rem', height: 'auto', margin: 'auto', marginTop: '-0.15rem' }} alt="logo" />
                                ) : (
                                    <FAIcon name={item.icon} style={{ color: isActive ? '#3AC9E6' : '#AAA' }}/>
                                )
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
