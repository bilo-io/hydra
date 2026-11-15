export const numberWithDelimiter = (x: number | string, delimiter = ' ') => {
    x = x.toString();
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) { x = x.replace(pattern, `$1${delimiter}$2`); }
    return x;
};

export const formatNumber = (
    value: number,
    decimals = 2,
    separator = ' ',
    shorten = false
) => {
    if (!value) {
        return '';
    }

    const result = Number(value).toFixed(decimals);
    const parts = result.split('.');

    if (shorten) {
        const number = Number.parseFloat(result.toString());
        if (number >= 1.0e7) return `${Math.floor(Math.abs(number) / 1.0e6)}m`;
        if (number >= 1.0e4) return `${Math.floor(Math.abs(number) / 1.0e3)}k`;
        if (number >= 1.0e3) return `${(number / 1.0e3).toFixed(1)}k`;
        else { return Math.abs(number); }
    } else {
        const resultWithDelimiter = decimals > 0 ? `${numberWithDelimiter(parts[0], separator)}.${parts?.[1]}` : `${numberWithDelimiter(parts[0], separator)}`;

        return resultWithDelimiter;
    }
};

export const formatCurrency = (
    value: number,
    code: string,
    decimals?: number,
    shorten = false
) => {
    if (!value && value !== 0) {
        return '';
    }

    if (!code) {
        return '';
    }

    const fiatCodes = [
        { code: 'ZAR', symbol: 'R' },
        { code: 'GBP', symbol: '£' },
        { code: 'USD', symbol: '$' },
        { code: 'CHF', symbol: '₣' },
        { code: 'EUR', symbol: '€' }
    ];
    // const bundleCodes = ['RVXDEFI', 'RVXINFL', 'RVX5PLAT', 'RVX5PAY', 'RVX10']

    const isFiat = fiatCodes.map(f => f.code).includes(code?.toUpperCase());
    // const isBundle = bundleCodes.includes(code?.toUpperCase())
    // const isCrypto = !isFiat

    const formattedString = value === 0 ? '0.00' : formatNumber(value, decimals ?? 2, ' ', shorten);

    return isFiat
        ? `${fiatCodes.find(f => f.code === code)?.symbol}${formattedString}`
        : `${formattedString} ${code}`;
};
