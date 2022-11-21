import * as React from "react";
import Divider from "@mui/material/Divider";
import BarCharts from "./BarCharts";
import StackedBarCharts from "./StackedBarCharts";

export default function AllReposShow({ githubRepoData }) {
  return (
    <div>
      {/* Render barchart component for a monthly created issues for a selected repositories*/}
      <BarCharts
        title={`Stars of all Repos`}
        data={githubRepoData?.starsCount}
      />
      {/* Render barchart component for a monthly created issues for a selected repositories*/}
      <BarCharts
        title={`Forks of all Repos`}
        data={githubRepoData?.forksCount}
      />
      <Divider sx={{ borderBlockWidth: "3px", borderBlockColor: "#FFA500" }} />
      {/* Rendering Timeseries Forecasting of Created Issues using Tensorflow and
                Keras LSTM */}
      <StackedBarCharts />
    </div>
  );
}
