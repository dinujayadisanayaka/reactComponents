import React, { Component } from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import ChartjsPie from '../components/chart/chartjsPie';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            wchart:1
        };
    }
    render() {
        return (
               <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6} md={3}>
            <ChartjsPie/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            Love
          </Grid>

          {this.state.wchart ?  <Grid item xs={12} sm={6} md={6}>
          <ChartjsPie/>
          </Grid> : 'not'}
         
        </Grid>
      </Container>
            // </div>
        )
    }
}



