'use client'

import * as React from 'react';
import Link from '@mui/material/Link';
import Title from './Title';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

const columns: GridColDef<(typeof rows2)[number]>[] = [
  { field: 'id', headerName: 'ID', flex: 1},
  {
    field: 'firstName',
    headerName: 'First name', flex: 2
  },
  {
    field: 'lastName',
    headerName: 'Last name', flex: 4
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number', flex: 1
  }
];

const rows2 = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function ResultsTable() {
  return (
    <React.Fragment>
      <Title>Results</Title>
      <DataGrid rows={rows2} columns={columns}  />
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Export
      </Link>
    </React.Fragment>
  );
}
