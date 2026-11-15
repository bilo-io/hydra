/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Table from '../../components/Core/Table';
import { ColumnDef } from '@tanstack/react-table';

interface TableCurrenciesProps {
  data: unknown[];
}

export const TableCurrencies: React.FC<TableCurrenciesProps> = ({ data }) => {
  const columns = React.useMemo<ColumnDef<unknown>[]>(
    () => [
      {
        accessorKey: 'name',
        id: 'name',
        header: () => <span>Asset</span>,
        cell: ({ row: { original } }: { row: { original: any } }) => (
          <div className="flex items-center gap-3">
            {original.image && (
              <img src={original.image} alt={original.name} className="h-6 w-6 rounded-full" />
            )}
            <span className="font-semibold text-foreground">{original.name}</span>
            <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs uppercase text-muted-foreground">
              {original.symbol}
            </span>
          </div>
        ),
      },
      {
        accessorKey: 'current_price',
        id: 'current_price',
        header: () => <span>Spot Price</span>,
        cell: ({ getValue }: { getValue: () => any }) => {
          const val = Number(getValue() ?? 0);
          return <span className="font-mono font-medium">${val.toLocaleString('en-US')}</span>;
        },
      },
      {
        accessorKey: 'high_24h',
        id: 'high_24h',
        header: () => <span>High 24H</span>,
        cell: ({ getValue }: { getValue: () => any }) => {
          const val = Number(getValue() ?? 0);
          return <span className="font-mono text-emerald-500">${val.toLocaleString('en-US')}</span>;
        },
      },
      {
        accessorKey: 'low_24h',
        id: 'low_24h',
        header: () => <span>Low 24H</span>,
        cell: ({ getValue }: { getValue: () => any }) => {
          const val = Number(getValue() ?? 0);
          return <span className="font-mono text-rose-500">${val.toLocaleString('en-US')}</span>;
        },
      },
    ],
    [],
  );

  return (
    <div>
      {/* @ts-ignore */}
      <Table data={data} columns={columns} />
    </div>
  );
};

export default TableCurrencies;
