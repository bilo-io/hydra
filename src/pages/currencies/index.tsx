import React from 'react';

type CryptoCurrenciesProps = {
    type: 'crypto' | 'fiat'
}

export const Currencies: React.FC<CryptoCurrenciesProps> = ({ type }) => {
    return (
        <div>{type} currencies</div>
    );
};

export default Currencies;