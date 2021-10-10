import React, { Component } from 'react';
import {Box, Grid, Container, Typography, containerClasses} from '@mui/material';
import ChartjsPie from '../components/chart/chartjsPie';
import AreaChar from "../components/chart/areaChart";
import DoubleBargraph from "../components/chart/doubleBargraph";
import LineChart from "../components/chart/lineChart";
import PieChart2 from "../components/chart/pieChart2";
import { Layout } from 'antd';
import { purple } from '@mui/material/colors';
import ProfileDetails from "../components/form/profileDetails";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            wchart:1
        };
    }
    render() {
        return (
            <div >
    <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        {/*<Grid container spacing={3}>*/}
        {/*  <Grid item xs={4}>*/}
        {/*   <ChartjsPie/>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={8} >*/}
        {/*    <AreaChar/>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={12}>*/}
        {/*    <DoubleBargraph/>*/}
        {/*  </Grid>*/}

        {/*  <Grid item xs={8}>*/}
        {/*    <LineChart/>*/}
        {/*  </Grid>*/}


        {/*    <Grid item xs={8} sm={6} md={3}>*/}
        {/*        <PieChart2/>*/}
        {/*    </Grid>*/}

        {/*</Grid>*/}
    </Container>
            </div>
        )
    }
}



