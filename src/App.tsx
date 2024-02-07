import React, { useState } from 'react';
import './App.css';
import {
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { DebouncedInput } from './Common/DebounceInput';
import { MovieTypes, movieData } from './Constants/movieData';

const columnHelper = createColumnHelper<MovieTypes>()

const columns = [
  columnHelper.accessor('moviename', {
    header: () => <span>Movie Name🎬</span>,
  }),
  columnHelper.accessor('actor', {
    header: () => <span>Actor👨🏻‍🎤</span>,
  }),
  columnHelper.accessor('actress', {
    header: () => <span>Actress👩🏻‍🎤</span>,
  }),
  columnHelper.accessor('release_date', {
    header: () => <span>Release Date📆</span>,
    cell: (info : any) => info.getValue() || "N/A",
  }),
  columnHelper.accessor('rating', {
    header: () => <span>Rating🌟</span>,
    cell: (info : any) => info.getValue() || "NAN",
  })
]

function App() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data: movieData,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  })

  return (
    <div className="p-2 main-container">
      <h1>CinemaWood🎥</h1>
      <div>
        <DebouncedInput
          value={globalFilter ?? ''}
          onChange={value => setGlobalFilter(String(value))}
          className="input-main"
          placeholder="🔎 Search all columns..."
        />
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup: any) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: '🔼',
                          desc: '🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row: any) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell: any) => (
                <td key={cell.id}>
                  {cell.column.columnDef.cell ? flexRender(cell.column.columnDef.cell, cell.getContext()): "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;