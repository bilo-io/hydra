/* eslint-disable import/no-anonymous-default-export */
import ADA from './ADA'
import BAT from './BAT'
import BNB from './BNB'
import BTC from './BTC'
import BTG from './BTG'
import DAI from './DAI'
import DOGE from './DOGE'
import ETC from './ETC'
import ETH from './ETH'
import FIL from './FIL'
import IOST from './IOST'
import LN from './LN'
import LSK from './LSK'
import MATIC from './MATIC'
import MKR from './MKR'
import MONERO from './MONERO'
import NEO from './NEO'
import ONT from './ONT'
import QTUM from './QTUM'
import THETA from './THETA'
import TRX from './TRX'
import USDC from './USDC'
import USDT from './USDT'
import VET from './VET'
import XLM from './XLM'
import XMR from './XMR'
import XRP from './XRP'
import ZEC from './ZEC'

const coins = {
    BTC,
    ETH,
    ADA,
    BAT,
    BNB,
    DOGE,
    NEO,
    LN,
    TRX,
    USDC,
    USDT,
    XLM,
    XRP,
    VET,
    XMR,
    THETA,
    MONERO,
    MKR,
    MATIC,
    FIL,
    DAI

}

export const keys = Object.keys(coins)

export default coins

const exludedCoins = {
    ETC,
    IOST,
    LSK,
    QTUM,
    ONT,
    BTG,
    ZEC
}

console.log({ exludedCoins })
