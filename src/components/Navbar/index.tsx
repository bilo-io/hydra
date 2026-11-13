import React from 'react'
import FAIcon from 'react-fontawesome'
import appLogo from 'assets/img/hydra-icon.png'
import { useLocation, useNavigate } from 'react-router'
import useWindowSize from 'hooks/use-window-size'

export const Navbar = ({ onToggle, type }: { onToggle: Function, type?: string }) => {
  const navigate = useNavigate()
  const goTo = (path: string) => navigate(path)
  const activePath = useLocation().pathname
  const windowSize = useWindowSize()

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
      name: 'Products',
      path: '/products',
      icon: '',
      onClick: () => goTo('/products')
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
    }
  ]

  const isMobile = windowSize?.width && windowSize?.width < 480
  const renderItems = () => (items || []).map((item, i) => {
    // const isActive = window.location.pathname.includes(item.path)
    const isActive = activePath?.includes(item.path)
    return (
      <div
        key={i}
        onClick={() => item.onClick()}
        className={ item.main ? 'main-tab' : 'normal-tab'}
      >
        <div className="flex-row">
          {
            item.main
              ? (
                <img src={ appLogo } style={{ width: '3.2rem', height: 'auto', margin: 'auto', marginTop: isMobile ? '-0.15rem' : '0.3' }} alt="logo" />
              )
              : (

                <FAIcon name={item.icon} style={{ color: isActive ? '#3AC9E6' : '#AAA' }} />
              )
          }
          <div className="label">{item.name}</div>
        </div>
      </div>
    )
  })

  return (
    <div className={`${type}-navbar`}>
      {
        isMobile
          ? renderItems()
          : (
            <div style={{ height: 'fit-content', display: 'flex', flexDirection: 'column', marginTop: 'auto', marginBottom: 'auto', width: '100%' }}>
              {renderItems()}
            </div>
          )
      }
    </div>
  )
}

export default Navbar
