import React, { Component } from 'react';
import BarGraph from '../components/chart/bargraph';
import DoubleBargraph from "../components/chart/doubleBargraph";
import AreaChar from "../components/chart/areaChart";


export default class bgraph extends Component {
    render() {
        return (
            <div>
                bgraph
                {/*<DoubleBargraph/>*/}
               <AreaChar/>
            </div>
        )
    }
}
