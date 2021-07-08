import React from 'react'
import clsx from 'clsx'
import { useTable, useExpanded } from 'react-table'

export const AdvancedTable = ({
    data,
    columns,
    padded,
    onClickRow,
    renderRowSubComponent,
    noDataMessage,
    serverErrorMessage
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
            expanded
        }
    } = useTable(
        {
            columns,
            data,
            // @ts-ignore
            initialState: { pageIndex: 1 }
        },
        useExpanded
    )

    return (
        <div className="w-full relative">
            <div>
                <table
                    {...getTableProps()}
                    className="w-full table-fixed border-separate"
                    style={{
                        borderSpacing: '0px 4px'
                    }}
                >
                    <thead className="rounded-lg">
                        {headerGroups.map((headerGroup, h) => (
                            <tr {...headerGroup.getHeaderGroupProps()}
                                key={h}>
                                {headerGroup.headers.map((column, i) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        key={i}
                                        className={clsx(
                                            '',
                                            'bg-input-background text-header-text text-sm text-left px-3 py-2 font-normal',
                                            {
                                                'rounded-l-lg': i === 0,
                                                'rounded-r-lg': i === columns.length - 1
                                            }
                                        )}
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                </table>
            </div>

            <div className="overflow-x-auto h-full">
                <table
                    className={clsx('w-full border-separate table-fixed', {
                        'pb-20': padded
                    })}
                    style={{
                        borderSpacing: '0px 4px'
                    }}
                >
                    <tbody {...getTableBodyProps()}>
                        {rows.length <= 0 && (
                            <tr className="mt-4 w-full text-center">
                                <td
                                    style={{
                                        verticalAlign: 'middle',
                                        padding: '15px'
                                    }}
                                    className={clsx(
                                        'bg-background mt-4 text-body-text text-center whitespace-whitespace-pre-wrap rounded-l-lg rounded-r-lg'
                                    )}
                                >
                                    {serverErrorMessage || noDataMessage}
                                </td>
                            </tr>
                        )}

                        {rows.length > 0 &&
                            rows.map((row, i) => {
                                prepareRow(row)
                                const rowProps = row.getRowProps()
                                return (
                                    <>
                                        <tr
                                            {...rowProps}
                                            onClick={() => onClickRow?.(row.original)}
                                            className={clsx('mt-4', {
                                                'cursor-pointer': !!onClickRow
                                            })}
                                        >
                                            {row.cells.map((cell, c) => {
                                                const lastIndex = row.cells.length - 1

                                                return (
                                                    <td
                                                        {...cell.getCellProps()}
                                                        key={c}
                                                        style={{
                                                            verticalAlign: 'middle',
                                                            padding: '15px'
                                                        }}
                                                        className={clsx(
                                                            'bg-background mt-4 text-header-text text-left whitespace-whitespace-pre-wrap',
                                                            {
                                                                'rounded-l-lg': c === 0,
                                                                'rounded-r-lg': c === lastIndex
                                                            }
                                                        )}
                                                    >
                                                        {cell.render('Cell')}
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                        {/* @ts-ignore */}
                                        {(row.isExpanded || expanded[i]) && (
                                            <tr>
                                                <td colSpan={columns.length}>
                                                    {renderRowSubComponent?.({ row, rowProps })}
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdvancedTable
