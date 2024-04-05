import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '@/mui-dashboard/Chart';
import Details from '@/mui-dashboard/Details';
import ResultsTable from '@/mui-dashboard/ResultsTable';

export default function Home() {
  return (
    <Box
    component="main"
  >
    <Toolbar />
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={12}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <ResultsTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Box>
  )
}
