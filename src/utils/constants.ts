import { ISelectOption } from "../components/Core"

export const fiatCurrencyOptions: ISelectOption[] = [
    { value: 'usd', label: 'USD' },
    { value: 'zar', label: 'ZAR' },
    { value: 'eur', label: 'EUR' }
]

export const paginationOptions: ISelectOption[] = [
    {
        label: '10',
        value: 10
    },
    {
        label: '25',
        value: 25
    },
    {
        label: '50',
        value: 50
    },
    {
        label: '100',
        value: 100
    }
]