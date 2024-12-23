
import React, { useEffect, useState } from 'react';
import TableCurrencies from './Table';
import { fetchMarkets } from '../../apis/coingecko';

type CryptoCurrenciesProps = {
    type: 'crypto' | 'fiat'
}

export const Currencies: React.FC<CryptoCurrenciesProps> = ({ type }) => {
    const [list, setList] = useState<unknown[]>([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const markets = await fetchMarkets({
            currencyCode: 'usd'
        })

        setList(markets.data)

    }
    return (
        <>
            <div>{type} currencies</div>
            <TableCurrencies data={list} />
        </>
    );
};

export default Currencies;