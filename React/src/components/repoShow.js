import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import BarCharts from "./BarCharts";

export default function RepoShow({ githubRepoData, repository }) {
  return (
    <div>
      {/* Render barchart component for a monthly created issues for a selected repositories*/}
      <BarCharts
        title={`Monthly Created Issues for ${repository.value} in last 2 years`}
        data={githubRepoData?.created}
      />
      {/* Render barchart component for a monthly created issues for a selected repositories*/}
      <BarCharts
        title={`Weekly Closed Issues for ${repository.value} in last 2 years`}
        data={githubRepoData?.closed}
      />
      <Divider sx={{ borderBlockWidth: "3px", borderBlockColor: "#FFA500" }} />
      {/* Rendering Timeseries Forecasting of Created Issues using Tensorflow and
                Keras LSTM */}
      <div>
        <Typography variant="h5" component="div" gutterBottom>
          Timeseries Forecasting of Created Issues using Tensorflow and Keras
          LSTM based on past month
        </Typography>

        <div>
          <Typography component="h4">Model Loss for Created Issues</Typography>
          {/* Render the model loss image for created issues */}
          <img
            src={githubRepoData?.createdAtImageUrls?.model_loss_image_url}
            alt={"Model Loss for Created Issues"}
            loading={"lazy"}
          />
        </div>
        <div>
          <Typography component="h4">
            LSTM Generated Data for Created Issues
          </Typography>
          {/* Render the LSTM generated image for created issues*/}
          <img
            src={githubRepoData?.createdAtImageUrls?.lstm_generated_image_url}
            alt={"LSTM Generated Data for Created Issues"}
            loading={"lazy"}
          />
        </div>
        <div>
          <Typography component="h4">
            All Issues Data for Created Issues
          </Typography>
          {/* Render the all issues data image for created issues*/}
          <img
            src={githubRepoData?.createdAtImageUrls?.all_issues_data_image}
            alt={"All Issues Data for Created Issues"}
            loading={"lazy"}
          />
        </div>
      </div>
      {/* Rendering Timeseries Forecasting of Closed Issues using Tensorflow and
                Keras LSTM  */}
      <div>
        <Divider
          sx={{ borderBlockWidth: "3px", borderBlockColor: "#FFA500" }}
        />
        <Typography variant="h5" component="div" gutterBottom>
          Timeseries Forecasting of Closed Issues using Tensorflow and Keras
          LSTM based on past month
        </Typography>

        <div>
          <Typography component="h4">Model Loss for Closed Issues</Typography>
          {/* Render the model loss image for closed issues  */}
          <img
            src={githubRepoData?.closedAtImageUrls?.model_loss_image_url}
            alt={"Model Loss for Closed Issues"}
            loading={"lazy"}
          />
        </div>
        <div>
          <Typography component="h4">
            LSTM Generated Data for Closed Issues
          </Typography>
          {/* Render the LSTM generated image for closed issues */}
          <img
            src={githubRepoData?.closedAtImageUrls?.lstm_generated_image_url}
            alt={"LSTM Generated Data for Closed Issues"}
            loading={"lazy"}
          />
        </div>
        <div>
          <Typography component="h4">
            All Issues Data for Closed Issues
          </Typography>
          {/* Render the all issues data image for closed issues*/}
          <img
            src={githubRepoData?.closedAtImageUrls?.all_issues_data_image}
            alt={"All Issues Data for Closed Issues"}
            loading={"lazy"}
          />
        </div>
      </div>
    </div>
  );
}
