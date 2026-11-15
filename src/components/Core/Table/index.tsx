import React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Select from '../Forms/Select';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { paginationOptions } from '../../../utils/constants';

const Table = ({ data, columns }: { data: any[]; columns: ColumnDef<any>[] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const [state, setState] = React.useState(table.initialState);

  table.setOptions((prev) => ({
    ...prev,
    state,
    onStateChange: setState,
  }));

  return (
    <div className="w-full space-y-4">
      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan} className="px-4 py-3 font-semibold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-border">
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-8 text-center text-muted-foreground"
                >
                  No records available.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="transition-colors hover:bg-muted/40"
                >
                  {row.getVisibleCells().map((cell) => {
                    const colDef: any = cell.column.columnDef;
                    const renderer = colDef.cell ?? colDef.Cell;
                    return (
                      <td key={cell.id} className="px-4 py-3 text-foreground">
                        {renderer
                          ? flexRender(renderer, {
                              ...cell.getContext(),
                              value: cell.getValue(),
                            } as any)
                          : String(cell.getValue() ?? '')}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Button
            className="px-2.5 py-1 text-xs"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </Button>
          <Button
            className="px-2.5 py-1 text-xs"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </Button>
          <Button
            className="px-2.5 py-1 text-xs"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </Button>
          <Button
            className="px-2.5 py-1 text-xs"
            onClick={() => table.setPageIndex(Math.max(0, table.getPageCount() - 1))}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span>
            Page{' '}
            <strong className="text-foreground">
              {table.getState().pagination.pageIndex + 1} of {Math.max(1, table.getPageCount())}
            </strong>
          </span>
          <label className="flex items-center gap-1.5">
            <span>Go to:</span>
            <Input
              type="number"
              min="1"
              max={Math.max(1, table.getPageCount())}
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="w-16 py-1"
            />
          </label>
          <Select
            value={table.getState().pagination.pageSize}
            options={paginationOptions}
            onChange={(e: { target: { value: any } }) => {
              table.setPageSize(Number(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
