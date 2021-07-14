import React from 'react'
import { withCommas } from '../../utils/format-number'

const PriceChange = (
  { percentage, value, symbol, isStacked }
    :
  { percentage: number, value?: number, symbol?: string; isStacked?: boolean; }
) => {
  const backgroundColor = percentage > 0
    ? 'rgba(34, 255, 100, 0.3)'
    : percentage === 0
      ? 'rgba(255,255,255,0.2)'
      : 'rgba(200, 0, 0, 0.3)'

  const textColor = percentage > 0
    ? '#22FF11'
    : percentage === 0
      ? '#fff'
      : '#FF0000'
  return (
    <div style={{
      backgroundColor,
      borderRadius: '0.25rem',
      padding: '0.25rem',
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
      lineHeight: '1rem',
      display: 'flex',
      textAlign: isStacked ? 'center' : 'left',
      flexDirection: isStacked ? 'column' : 'row'
    }}>
      <div style={{
        color: textColor
      }}>{percentage >= 0 ? '+' : ''}{percentage.toFixed(3)}%</div>

      {
        symbol && value && (
          <div style={{
            color: textColor,
            margin: '-0.1rem',
            marginLeft: isStacked ? 0 : '1rem',
            marginTop: isStacked ? '0.5rem' : 0,
            marginBottom: isStacked ? '0.5rem' : 0,
            padding: '0.5rem',
            borderRadius: '0.25rem',
            backgroundColor: 'rgba(0,0,0,0.4)'
            // margin: 'auto',
          }}>
            {symbol}{value && withCommas(Number(value.toFixed(3)))}
          </div>
        )}
    </div>
  )
}

PriceChange.defaultProps = {
  value: 0,
  percentage: 0,
  symbol: '$',
  isStacked: false
}

export default PriceChange
