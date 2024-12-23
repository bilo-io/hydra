import Currencies from "./currencies";
import Portfolio from "./Portfolio";
import NotFound from "./NotFound";

import TradeBuy from './trade/TradeBuy'
import TradeSell from './trade/TradeSell'
import Settings from "./settings";

export const routes = [
    {
        path: '/',
        element: <Portfolio />
    },
    // Currencies
    {
        path: '/currencies/crypto',
        element: <Currencies type={'crypto'} />
    },
    {
        path: '/currencies/fiat',
        element: <Currencies type={'fiat'} />
    },
    // Trade
    {
        path: '/trade/buy',
        element: <TradeBuy />
    },
    {
        path: '/trade/sell',
        element: <TradeSell />
    },
    {
        path: '/settings',
        element: <Settings />
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routes;