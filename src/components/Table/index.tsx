import React from 'react';
import clsx from 'clsx';
import { useTable, useExpanded } from 'react-table';

export const AdvancedTable = ({
  data,
  columns,
  onClickRow,
  renderRowSubComponent,
  noDataMessage = 'No records available',
  serverErrorMessage,
}: {
  data: any[];
  columns: any[];
  padded?: boolean;
  onClickRow?: Function | null;
  canExpand?: boolean;
  renderRowSubComponent?: Function | null;
  noDataMessage?: string;
  serverErrorMessage?: any;
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: {
      // @ts-ignore
      expanded,
    },
  } = useTable(
    {
      columns,
      data,
      // @ts-ignore
      initialState: { pageIndex: 1 },
    },
    useExpanded,
  );

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border bg-card">
      <table {...getTableProps()} className="w-full text-left text-sm">
        <thead className="border-b border-border bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
          {headerGroups.map((headerGroup, h) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={h}>
              {headerGroup.headers.map((column, i) => (
                <th {...column.getHeaderProps()} key={i} className="px-4 py-3 font-semibold">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y divide-border">
          {rows.length <= 0 && (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-muted-foreground">
                {serverErrorMessage || noDataMessage}
              </td>
            </tr>
          )}

          {rows.length > 0 &&
            rows.map((row, i) => {
              prepareRow(row);
              const rowProps = row.getRowProps();
              return (
                <React.Fragment key={rowProps.key || i}>
                  <tr
                    {...rowProps}
                    onClick={() => onClickRow?.(row.original)}
                    className={clsx('transition-colors hover:bg-muted/40', {
                      'cursor-pointer': !!onClickRow,
                    })}
                  >
                    {row.cells.map((cell, c) => (
                      <td {...cell.getCellProps()} key={c} className="px-4 py-3 text-foreground">
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                  {/* @ts-ignore */}
                  {(row.isExpanded || expanded[i]) && (
                    <tr>
                      <td colSpan={columns.length} className="px-4 py-3">
                        {renderRowSubComponent?.({ row, rowProps })}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdvancedTable;
