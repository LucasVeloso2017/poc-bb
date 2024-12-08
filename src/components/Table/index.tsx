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
};

const Table = <DataType,>({ columns, data }: TableProps<DataType>) => {
  return (
    <S.TableWrapper>
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
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                {column.rowCell(rowData)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </S.TableWrapper>
  );
};

export default Table;
