import React from 'react';
import { withCommas } from '../../utils/format-number';

console.log('Hello')

const PriceChange = (
  { percentage, value, symbol, isStacked }
    :
  { percentage: number, value?: number, symbol?: string; isStacked?: boolean; }
) => {
  const backgroundColor = percentage > 0
  ? 'rgba(34, 255, 100, 0.3)'
    : percentage === 0 ? 'rgba(255,255,255,0.2)'
  : 'rgba(200, 0, 0, 0.3)'

  const textColor = percentage > 0
  ? '#22FF11'
    : percentage === 0 ? '#fff'
  : '#FF0000'
  return (
    <div style={{
      backgroundColor,
      borderRadius: '2rem',
      padding: '0.1rem',
      paddingLeft: '0.25rem',
      paddingRight: '0.25rem',
      lineHeight: '1rem',
      display: 'flex',
      textAlign: isStacked ? 'center' : 'left',
      flexDirection: isStacked ? 'column' : 'row'
    }}>
      <div style={{
        color: textColor,
      }}>{percentage >= 0 ? '+' : '-'}{percentage}%</div>

      {
        symbol && value && (
          <div style={{
              color: textColor,
              margin: '-0.1rem',
              marginLeft: '1rem',
              marginRight: '-0.2rem',
              padding: '0.2rem',
              borderRadius: '2rem',
              backgroundColor: 'rgba(0,0,0,0.4)',
              // margin: 'auto',
          }}>
            {symbol}{value && withCommas(value)}
          </div>
      )}
  </div>
  );
}

PriceChange.defaultProps = {
  value: 100,
  percentage: 12,
  symbol: '$',
  isStacked: true
}

export default PriceChange;