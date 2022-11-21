import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// TODO: Implement stacked bar charts -> Test with static data for structure first
const repositories = [
  ["angular/angular", 1290, 500],
  ["angular/angular-cli", 214],
  ["angular/material", 278],
  ["d3/d3", 3],
  ["golang/go", 7930],
  ["google/go-github", 58],
  ["sebholstein/angular-google-maps", 46],
  ["facebook/react", 1092],
  ["tensorflow/tensorflow", 2362],
  ["keras-team/keras", 346],
  ["pallets/flask", 8],
];

const StackedBarCharts = () => {
  const config = {
    chart: {
      type: "column",
    },
    title: {
      text: "Stacked Bar charts of open and closed issues",
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Issues",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Issues: <b>{point.y} </b>",
    },
    series: [
      {
        name: repositories.key,
        data: repositories.data,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          align: "right",
          format: "{point.y}", // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  };
  return (
    <div>
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={config}
        ></HighchartsReact>
      </div>
    </div>
  );
};

export default StackedBarCharts;
