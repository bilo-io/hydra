
import React, { useEffect, useState } from 'react';
import TableCurrencies from './Table';
import { fetchMarkets } from '../../apis/coingecko';

type CryptoCurrenciesProps = object

export const Currencies: React.FC<CryptoCurrenciesProps> = () => {
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
            <div>currencies</div>
            <TableCurrencies data={list} />
        </>
    );
};

export default Currencies;