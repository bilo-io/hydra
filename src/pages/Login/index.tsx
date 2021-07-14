import React from 'react'
import appIcon from 'assets/img/hydra-icon.png'

export function Login () {
  const authProviders = [
    {
      name: 'Google',
      background: '#D74638',
      color: '#fff',
      img: 'https://www.designbust.com/download/1016/png/google_logo_png_transparent512.png'

    },
    {
      name: 'Facebook',
      background: '#3A4F93',
      color: '#fff',
      img: 'https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'
    }
  ]

  return (
    <div className="flex-col" style={{ maxWidth: '20em', margin: 'auto' }}>
      <img src={appIcon} style={{ width: '6rem', height: 'auto', margin: 'auto', marginTop: '2rem' }} />

      <br />
      <br />

      <div className="divider horizontal" />

      <div style={{ textAlign: 'center', width: '100%', marginTop: '2rem', marginBottom: '2rem' }}>Log in</div>

      <div className="divider horizontal" />

      <br />
      <br />

      <div className="flex-col">
        {
          authProviders.map((provider, i) => (
            <div key={i}
              onClick={() => console.log('Login with ', provider.name)}
              style={{
                backgroundColor: provider.background,
                color: provider.color,
                borderRadius: '6rem',
                minWidth: '16em',
                maxWidth: '20rem',
                margin: 'auto',
                marginBottom: '1rem',
                cursor: 'pointer'
              }} className="flex-row">
              <img src={provider.img} style={{ width: '2rem', height: '2rem', margin: '1rem' }} alt={provider.name} />
              <div style={{ lineHeight: '4rem', color: provider.color }}>Sign in with {provider.name}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Login
