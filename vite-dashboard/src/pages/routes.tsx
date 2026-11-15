/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'

const Currencies = lazy(() => import("./currencies"));
const Charts = lazy(() => import('./charts'))
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
        path: '/currencies',
        element: <Currencies />
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
        path: '/charts',
        element: <Charts />
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routes;