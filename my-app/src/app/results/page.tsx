'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '@/mui-dashboard/Chart';
import Details from '@/mui-dashboard/Details';
import ResultsTable from '@/mui-dashboard/ResultsTable';
import { useEffect } from 'react';
import { getResults } from '@/api/service';

export default function Home() {
  useEffect(() => {
    getResults().then((val) => console.log(val))
    console.log("test2")
  })

  return (
    <Box
      component="main"
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Details />
            </Paper>
          </Grid>
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
