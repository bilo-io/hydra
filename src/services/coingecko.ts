/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl: string = 'https://api.coingecko.com/api/v3'

export const fetchCoins = async (id?: string) => {
  const url = `${baseUrl}/coins${id ? `/${id}` : ''}`

  return await axios({
    method: 'GET',
    url
  })
}

export const fetchChartData = async ({ id, currency, days }: { id: string, currency: string, days: any }) => {
  const url = `${baseUrl}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`

  return await axios({
    method: 'GET',
    url
  })
}

export const fetchMarkets = async ({ currencyCode }: { currencyCode: string }) => {
  const url = `${baseUrl}/coins/markets?vs_currency=${currencyCode || 'usd'}&sparkline=true`

  return await axios({
    method: 'GET',
    url
  })
}
export default {
  fetchCoins,
  fetchChartData
}
