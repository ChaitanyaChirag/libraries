import React from "react";
import { useTable, usePagination} from "react-table";
import './Table.css'

export default function Table({ columns, data }) {

  const {
    getTableProps, 
    headerGroups, 
    page,
    nextPage,
    canNextPage,
   // setPageSize,
    previousPage,
    canPreviousPage,
    getTableBodyProps, 
    pageOptions,
    state,
    prepareRow 
  } = useTable({
    columns,
    data,
  },usePagination
  );
  const {pageIndex,/* pageSize*/}=state
  return (<div>

    <div className="dash">Dashboard/Users</div>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      
{page.map((row, i) => {
    prepareRow(row);
    return (
      <tr {...row.getRowProps()}>
        {row.cells.map(cell => {
          return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
        })}
      </tr>
    );
  })}
  </tbody>
    </table>
    
    <div>
      <span className="page">
        Page{' '}
        <strong >
          {pageIndex +1} of {pageOptions.length}
        </strong>{' '}
      </span>
     {/* <select value={pageSize}
      onChange={(e)=> setPageSize(Number(e.target.value))}>
        {[4,6].map ((pageSize)=>(
          <option key={pageSize} value={pageSize}>
          Show{pageSize}
          </option>
        ))
}
      </select>
*/}
    
    
    <button className="next" onlick={()=>nextPage()}disabled={!canNextPage}>Next</button>
    <button className="next"  onlick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
    </div>
   
    </div>
     
  );
}