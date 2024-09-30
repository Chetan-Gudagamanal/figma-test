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
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'longitude',
    label: 'Longitude',
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'altitude',
    label: 'Altitude',
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'delete1',
    label: 'Delete',
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(num, fencetype, latitude, longitude, altitude, delete1) {
//   const density = population / size;
  return { num, fencetype, latitude, longitude, altitude, delete1 };
}

const rows = [
  createData(1,'test','India', 'IN', 1324171354, 3287263),
  createData(2,'test','China', 'CN', 1403500365, 9596961),
  createData(3,'test','Italy', 'IT', 60483973, 301340),
  createData(4,'test','United States', 'US', 327167434, 9833520),
  createData(5,'test','Canada', 'CA', 37602103, 9984670),
  createData(6,'test','Australia', 'AU', 25475400, 7692024),
  createData(7,'test','Germany', 'DE', 83019200, 357578),
  createData(8,'test','Ireland', 'IE', 4857000, 70273),
  createData(9,'test','Mexico', 'MX', 126577691, 1972550),
  createData(10,'test','Japan', 'JP', 126317000, 377973),
  createData(11,'test','France', 'FR', 67022000, 640679),
  createData(12,'test','United Kingdom', 'GB', 67545757, 242495),
  createData(13,'test','Russia', 'RU', 146793744, 17098246),
  createData(14,'test','Nigeria', 'NG', 200962417, 923768),
  createData(15,'test','Brazil', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
            {rows
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
              })}
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