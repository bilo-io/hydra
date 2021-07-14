import React from 'react'

export interface propTypesLoader {
    type?: string,
    loading?: boolean,
}

export const LoaderType = {
  SPINNER: 'spinner',
  SPINNER_2: 'spinner-2',
  FULLSCREEN: 'fullscreen',
  RAINBOW: 'rainbow',
  ELLIPSIS: 'ellipsis',
  MDSPINNER: 'md-spin',
  UI3SPIN: 'ui-3-spin'
}

export const Ellipsis = ({ color }: { color?: string }) => <span className='ellipsis' style={{
  color: color || 'white'
}} />

export const MDSpinner = (props: any) => <span className='md-spin'/>

export const Spinner = (props: any) => <span style={{ borderWidth: '2px' }} className={`loader ${props.double
  ? 'double'
  : ''}`}/>

export const RainBowLoader = (props: any) => <div className='bar-loader'>
  <div className='bar1' />
  <div className='bar2' />
  <div className='bar3' />
  <div className='bar4' />
  <div className='bar5' />
  <div className='bar6' />
</div>

export const FullScreenLoader = (props: any) => (
  <div id='preloader'>
    <div id='loader' />
  </div>
)

export const UI3Spin = (prop: any) => (
  <div />
)

export const Loader = ({ type, color, style }: { type: string, color?: string, style?: any }) => {
  const loaderType = type || LoaderType.SPINNER

  switch (loaderType) {
  case LoaderType.SPINNER:
    return <Spinner style={style} />
  case LoaderType.SPINNER_2:
    return <Spinner double />
  case LoaderType.RAINBOW:
    return <RainBowLoader />
  case LoaderType.FULLSCREEN:
    return <FullScreenLoader />
  case LoaderType.MDSPINNER:
    return <MDSpinner />
  case LoaderType.ELLIPSIS:
    return <Ellipsis color={color} />
  case LoaderType.UI3SPIN:
    return <UI3Spin color={color} />
  default:

    return <div>Loading...</div>
  }
}

Loader.defaultProps = {
  color: '#00adee'
}
