import React from 'react'
import { AssetCard } from './AssetCard'
import { Advert } from './Advert'
import { ActionSuggestions } from './ActionSuggestions'
import { CoinCard } from './CoinCard'
import { noop } from 'utils/misc'

export default {
  title: 'Core/Cards',
  component: AssetCard
}

export function CardsStories () {
  return (
    <div>
      <Advert item={{ text: 'Advert item.text' }}/>
      <ActionSuggestions userState={{
        isVerified: true,
        hasFunds: true,
        hasHoldings: false

      }} />
    </div>
  )
}

export const CryptoCards = () => {
  return (
    <div>
      <h4>AssetCard</h4>
      <AssetCard />
      <h4>CoinCard</h4>

      <CoinCard item={{ code: 'BTC', name: 'Bitcoin' }} onClick={noop} currency={{ code: 'usd', symbol: '$' }} />
    </div>
  )
}
