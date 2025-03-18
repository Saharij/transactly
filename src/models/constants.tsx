type ColumnDefinition = { field: string, flex: number, headerName?: string }

export const columnDefs: ColumnDefinition[] = [
    { field: 'amount', flex: 1 },
    { field: 'balance', flex: 1 },
    { field: 'cashbackAmount', flex: 1, headerName: 'Cashback' },
    { field: 'commissionRate', flex: 1 },
    { field: 'description', flex: 2 },
    { field: 'operationAmount', flex: 1 },
    { field: 'time', flex: 1 },
]

type Currencies = { '980': string, '840': string }

export const currencies: Currencies = {
    '980': 'UAH',
    '840': 'USD'
}

export const oneDayTimestamp = 24 * 60 * 60 * 1000

export const monthTimestamp = oneDayTimestamp * 31
