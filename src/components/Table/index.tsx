import React from "react";

import * as S from './styles';

type Column<DataType> = {
  headerCell: React.ReactNode;
  rowCell: (data: DataType) => React.ReactNode;
  
};

// Define props for the Table component
type TableProps<DataType> = {
  columns: Column<DataType>[];
  data: DataType[];
  configurations?:{
    noStriped?:boolean
    noRowPadding?:boolean
    rowBackgroundColor?:string
    breakLineEachRow?:boolean
  }
};

const Table = <DataType,>({ columns, data, configurations }: TableProps<DataType>) => {
  return (
    <S.TableWrapper 
      rowBG={configurations?.rowBackgroundColor}
      noStriped={configurations?.noStriped}
      noRowPadding={configurations?.noRowPadding}
    >
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>
              {column.headerCell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, rowIndex) => (
          <>
          {configurations?.breakLineEachRow && (<br/> )}
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                {column.rowCell(rowData)}
              </td>
            ))}
          </tr>
          </>
        ))}
      </tbody>
    </S.TableWrapper>
  );
};

export default Table;
