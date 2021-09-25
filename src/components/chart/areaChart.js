import React, { Component } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "JAN",
    visits: 5,
  },
  {
    name: "FEB",
    visits: 10,
  },
  {
    name: "MAR",
    visits: 3,
  },
  {
    name: "APR",
    visits: 16,
  },
  {
    name: "MAY",
    visits: 20,
  },
  {
    name: "JUN",
    visits: 30,
  },
  {
    name: "JUL",
    visits: 25,
  },
  {
    name: "AUG",
    visits: 18,
  },
  {
    name: "SEP",
    visits: 10,
  },
  {
    name: "OCT",
    visits: 25,
  },
  {
    name: "NOV",
    visits: 29,
  },
  {
    name: "DEC",
    visits: 30,
  },
];

export default class AreaChar extends Component {
  // static jsfiddleUrl = "https://jsfiddle.net/alidingling/7j5bbbum/";

  render() {
    return (
        <div style={{ width: "99%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                  type="monotone"
                  dataKey="visits"
                  stroke="#8884d8"
                  fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
    );
  }
}