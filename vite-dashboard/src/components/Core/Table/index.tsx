/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import './index.css'

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table'
import Select from '../Forms/Select'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import { paginationOptions } from '../../../utils/constants'

const Table = ({ data, columns }: { data: any[], columns: ColumnDef<any>[], }) => {
    // const rerender = React.useReducer(() => ({}), {})[1]

    // Create the table and pass your options
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    // Manage your own state
    const [state, setState] = React.useState(table.initialState)

    // Override the state managers for the table to your own
    table.setOptions(prev => ({
        ...prev,
        state,
        onStateChange: setState,
        // These are just table options, so if things
        // need to change based on your state, you can
        // derive them here

        // Just for fun, let's debug everything if the pageIndex
        // is greater than 2
        debugTable: state.pagination.pageIndex > 2,
    }))

    return (
        <div className="p-0">
            <table className='w-full'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} colSpan={header.colSpan}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    {table.getFooterGroups().map(footerGroup => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map(header => (
                                <th key={header.id} colSpan={header.colSpan}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.footer,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
            <div className="h-2" />
            <div className="flex items-center gap-2">
                <Button
                    className="border rounded p-1"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<<'}
                </Button>
                <Button
                    className="border rounded p-1"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </Button>
                <Button
                    className="border rounded p-1"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>'}
                </Button>
                <Button
                    className="border rounded p-1"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    {'>>'}
                </Button>
                <span className="flex items-center gap-1">
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{' '}
                        {table.getPageCount()}
                    </strong>
                </span>
                <span className="flex items-center gap-1">
                    | Go to page:
                    <Input
                        type="number"
                        min="1"
                        max={table.getPageCount()}
                        defaultValue={table.getState().pagination.pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            table.setPageIndex(page)
                        }}
                        className="border p-1 rounded w-16"
                    />
                </span>
                <Select
                    value={table.getState().pagination.pageSize}
                    options={paginationOptions}
                    onChange={(e: { target: { value: any } }) => {
                        table.setPageSize(Number(e.target.value))
                    }}
                />

            </div>
            <div className="h-4" />
            {/* <Button onClick={() => rerender()} className="border p-2">
                Rerender
            </Button> */}
        </div>
    )
}

export default Table;