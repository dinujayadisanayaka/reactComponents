import React, { Component } from 'react';
import {Box, Grid, Container, Typography, containerClasses} from '@mui/material';
import ChartjsPie from '../components/chart/chartjsPie';
import AreaChar from "../components/chart/areaChart";
import DoubleBargraph from "../components/chart/doubleBargraph";
import LineChart from "../components/chart/lineChart";
import PieChart2 from "../components/chart/pieChart2";
// import { Layout } from 'antd';
import { purple } from '@mui/material/colors';
import ProfileDetails from "../components/form/profileDetails";
import OftadehLayout from "../components/Layouts/Oftadeh/OftadehLayout"

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            wchart:1
        };
    }
    render() {
        return (

        <OftadehLayout>123</OftadehLayout>

        )
    }
}



