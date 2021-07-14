import React from 'react'

function Button ({
  children,
  color,
  shape,
  className,
  style
}: {
    children: any,
    color?: string | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'white',
    shape?: string | 'solid' | 'hollow' | 'round' | 'big-round',
    className?: string,
    style?: any
}) {
  return (
    <button className={`${color} ${shape} ${className}`} style={style}>
      { children }
    </button>
  )
}

export default Button
