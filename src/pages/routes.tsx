/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'

const Currencies = lazy(() => import("./currencies"));
const Portfolio = lazy(() => import("./Portfolio"));
const Settings = lazy(() => import( "./settings"))
const Trade = lazy(() => import( './trade'))
const Transactions = lazy(() => import( "./transactions"))
const NotFound = lazy(() => import("./NotFound"));

export const routes = [
    {
        path: '/',
        element: <Portfolio />
    },
    {
        path: '/currencies/crypto',
        element: <Currencies type={'crypto'} />
    },
    {
        path: '/currencies/fiat',
        element: <Currencies type={'fiat'} />
    },
    {
        path: '/trade',
        element: <Trade />
    },
    {
        path: '/transactions',
        element: <Transactions />
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