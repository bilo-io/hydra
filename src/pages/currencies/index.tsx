
import React, { useEffect, useState } from 'react';
import TableCurrencies from './Table';
import { fetchMarkets } from '../../apis/coingecko';
import { useTranslation } from 'react-i18next';

type CryptoCurrenciesProps = object

export const Currencies: React.FC<CryptoCurrenciesProps> = () => {
    const { t } = useTranslation();
    
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
            <div>{t('currencies')}</div>
            <TableCurrencies data={list} />
        </>
    );
};

export default Currencies;