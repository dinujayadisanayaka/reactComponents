import React, {Component} from 'react';
import {Line} from "react-chartjs-2";

class LineChart extends Component {
    state = {
        data: {
            labels: [
                "JAN",
                "FEB",
                "MAR",
                "APR",
                "MAY",
                "JUN",
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC"
            ],
            datasets: [
                {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 24, 12, 19, 31, 30, 12, 3],
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 3
                }
            ],

        }

    };

    render() {
        return (
            <>
                {/* <div style={{ width: "50%", height: "90%" }}> */}
                <Line
                    data={this.state.data}
                    // width={50}
                    height={95}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}
                />
            </>
        );
    }
}

export default LineChart;