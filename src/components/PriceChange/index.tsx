import React from 'react';
import { withCommas } from 'utils/format-number';

const PriceChange = ({
  percentage = 0,
  value = 0,
  symbol = '$',
  isStacked = false,
}: {
  percentage: number;
  value?: number;
  symbol?: string;
  isStacked?: boolean;
}) => {
  const safePct = Number(percentage || 0);
  const isPositive = safePct > 0;
  const isZero = safePct === 0;

  const badgeTone = isPositive
    ? 'bg-emerald-500/15 text-emerald-500'
    : isZero
    ? 'bg-muted text-muted-foreground'
    : 'bg-rose-500/15 text-rose-500';

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-xs font-medium ${badgeTone} ${
        isStacked ? 'flex-col text-center' : 'flex-row'
      }`}
    >
      <span>
        {safePct >= 0 ? '+' : ''}
        {safePct.toFixed(2)}%
      </span>
      {symbol && value ? (
        <span className="opacity-80">
          ({symbol}
          {withCommas(Number(Number(value).toFixed(2)))})
        </span>
      ) : null}
    </div>
  );
};

export default PriceChange;
