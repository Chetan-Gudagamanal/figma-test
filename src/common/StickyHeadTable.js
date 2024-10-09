import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'num',
    label: 'S\u00a0No',
    minWidth: 50 
  },
  {
    id: 'fencetype',
    label: 'Fence\u00a0Type',
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'latitude',
    label: 'Latitude',
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toFixed(4),
  },
  {
    id: 'longitude',
    label: 'Longitude',
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toFixed(4),
  },
  {
    id: 'altitude',
    label: 'Altitude',
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toFixed(4),
  },
  {
    id: 'delete1',
    label: 'Delete',
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(num, fencetype, latitude, longitude, altitude, delete1) {
//   const density = population / size;
  return { num, fencetype, latitude, longitude, altitude, delete1 };
}

export default function StickyHeadTable({features, polygons, setPolygons}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // console.log(rows)
  const [rows, setRows] = React.useState([]);

  React.useEffect(()=> {
    let updatedRows = []
    // polygons.forEach((polygon, index) => {
    //   polygon.forEach(element => {
    //     console.log(element)
    //     // updatedRows.push(createData(index+1, 'test type', element[0], element[1], 'alt', 'Delete'))
    //     updatedRows = [...updatedRows, createData(index+1, 'test type', element[0], element[1], 'alt', 'Delete')]
    //   });
    //   }
    // )
    let polygon_index=1
    for (let polygon in features) {
      console.log(features[polygon]["geometry"])
      console.log(features[polygon]["geometry"]["coordinates"])
      features[polygon]["geometry"]["coordinates"][0].forEach((element, index) => {
        updatedRows = [...updatedRows, createData(index, 'test type', element[0], element[1], element[2], 'Delete')]
      });
      polygon_index+=1
    }
    console.log("====================================")
    console.log(updatedRows)
    console.log("====================================")
    setRows(updatedRows)
  }
  ,[polygons, features])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden'}}>
      <TableContainer sx={{ maxHeight: 245}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {/* {console.log(columns)} */}
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length ? rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              }): null}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}