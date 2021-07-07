export const MS_TO_HOURS = 1000 * 60 * 60
export const MS_TO_DAYS = MS_TO_HOURS * 24

export const periods: { label: string, days: number, date?: any }[] = [
    {
        label: 'D',
        days: 1,
        // @ts-ignore
        date: new Date() - 1 * MS_TO_DAYS
    },
    {
        label: 'W',
        days: 7
        // @ts-ignore
        // date: new Date() - 7 * MS_TO_DAYS
    },
    {
        label: 'M',
        days: 30
        // @ts-ignore
        // date: new Date() - 30 * MS_TO_DAYS
    },
    {
        label: 'Y',
        days: 365
        // @ts-ignore
        // date: new Date() - 365 * MS_TO_DAYS
    }
]

export const getTickInterval = (days: any) => {
    if (days === 0) {
        return 0.25
    }
    if (days <= 1) {
        return 1
    }
    const index = periods.findIndex(item => item.days === days)
    return periods[index - 1].days * 24
}

const allExports = {
    MS_TO_HOURS,
    MS_TO_DAYS,
    periods,
    getTickInterval
}

export default allExports
