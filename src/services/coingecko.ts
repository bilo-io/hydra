/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
const baseUrl = `https://api.coingecko.com/api/v3`

export const getCoins = async (id?: string) => {
    const url = `${baseUrl}/coins${id ? `/${id}` : ''}`
    return await axios({
        method: 'GET',
        url
    })
}

export const getChart = async ({ id }: { id: string }) => {
    const url = `${baseUrl}/coins/${id}/market_chart`
    return await axios({
        method: 'GET',
        url
    })
}

export default {
    getCoins,
    getChart,
};