import CryptoCurrencies from "./crypto/CryptoCurrencies";
import Landing from "./Landing";
import NotFound from "./NotFound";

import TradeBuy from './trade/TradeBuy'
import TradeSell from './trade/TradeSell'

export const routes = [
    {
        path: '/',
        element: <Landing />
    },
    {
        path: '/crypto/currencies',
        element: <CryptoCurrencies />
    },
    {
        path: '/trade/buy',
        element: <TradeBuy />
    },
    {
        path: '/trade/sell',
        element: <TradeSell />
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routes;