/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Table from '../../components/Core/Table';
import { ColumnDef } from '@tanstack/react-table';

interface TableCurrenciesProps {
    data: unknown[]
}

export const TableCurrencies: React.FC<TableCurrenciesProps> = ({ data }) => {
    const columns = React.useMemo<ColumnDef<unknown>[]>(() => [
        {
            accessorKey: 'name',
            id: 'name',
            header: () => <div>{'Name'}</div>,
            Cell: ({ value, row: { original } }: { value: string, row: { original: any } }) => (
                <div>({original.symbol}) {value}</div>
            )
        },
        {
            accessorKey: 'high_24h',
            id: 'high_24h',
            header: () => <div>{'High 24H'}</div>,
            Cell: ({ value, }: { value: string }) => (
                <div>{value}</div>
            )
        },
        {
            accessorKey: 'low_24h',
            id: 'low_24h',
            header: () => <div>{'Low 24H'}</div>,
            Cell: ({ value, }: { value: string }) => (
                <div>{value}</div>
            )
        }
    ], [])

    return (
        <div>
            {/* @ts-ignore */}
            <Table data={data} columns={columns} />
        </div>
    );
};

export default TableCurrencies;