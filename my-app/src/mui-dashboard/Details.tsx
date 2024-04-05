import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Details() {
  return (
    <React.Fragment>
      <Title>Details</Title>
      <Typography component="p" variant="h4">
        Search Name
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 04 April, 2024
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View history
        </Link>
      </div>
    </React.Fragment>
  );
}
