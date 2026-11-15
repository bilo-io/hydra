import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CoinCard = ({
  item,
  currency,
  onClick,
}: {
  item: any;
  currency: any;
  onClick?: Function;
}) => {
  const code = (currency?.code || 'usd').toLowerCase();
  const price =
    item?.market_data?.current_price?.[code] ??
    item?.market_data?.current_price?.usd ??
    item?.current_price ??
    0;
  const pct24h =
    item?.market_data?.price_change_percentage_24h ??
    item?.price_change_percentage_24h ??
    0;
  const imgSrc = item?.image?.large || item?.image?.small || item?.image;

  return (
    <div
      key={item?.id}
      onClick={() => onClick?.(item)}
      className="surface flex cursor-pointer items-center justify-between p-4 transition-all hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex items-center gap-3.5">
        {imgSrc && (
          <img
            src={imgSrc}
            alt={`${item?.id}`}
            className="h-10 w-10 rounded-full bg-muted/40 object-contain p-1"
          />
        )}
        <div>
          <div className="font-semibold text-foreground">{item?.name}</div>
          <div className="font-mono text-xs uppercase text-muted-foreground">
            {item?.symbol || item?.id}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 text-right">
        <div>
          <div className="font-mono text-sm font-bold text-foreground">
            {currency?.symbol || '$'}
            {Number(price).toLocaleString('en-US')}
          </div>
          <div
            className={`font-mono text-xs font-medium ${
              pct24h >= 0 ? 'text-emerald-500' : 'text-rose-500'
            }`}
          >
            {pct24h >= 0 ? '+' : ''}
            {Number(pct24h).toFixed(2)}%
          </div>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
};

export default CoinCard;
