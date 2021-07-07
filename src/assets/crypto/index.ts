/* eslint-disable import/no-anonymous-default-export */
import ADA from './ADA'
import BAT from './BAT'
import BNB from './BNB'
import BTC from './BTC'
import DOGE from './DOGE'
import ETH from './ETH'
import NEO from './NEO'
import TRON from './TRON'
import USDC from './USDC'
import USDT from './USDT'
import XLM from './XLM'
import XRP from './XRP'

const coins = {
    ADA,
    BAT,
    BNB,
    BTC,
    DOGE,
    ETH,
    NEO,
    TRON,
    USDC,
    USDT,
    XLM,
    XRP
}

export const keys = Object.keys(coins)

export default coins
