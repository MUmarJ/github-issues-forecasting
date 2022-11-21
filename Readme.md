# Forecasting Github Issues
![](TimeseriesForecastingDemo.gif)
Forecast GitHub Repo issues using a LSTM model with Google Cloud and Docker integration.

How does it work?
1) React Front-end calls Flask backend for data
2) Flask calls GitHub api for gathering opened and closed issues data
3) Flask sends this data to LSTM server for forecasting
4) LSTM server uploads figure images to Google Cloud storage bucket and sends image urls with numeric data back to Flask for React front-end

Any of these 3 components can be easily deployed using Docker with Google Cloud and linked with GitHub for continious deployment.

#### Improvements
+ Add stacked bar charts of closed and open issues for all repos
+ Use Facebook Prophet for alternate forecasting
+ Use StatsModels for another forecasting result

>Developed for Software Project Management (CS587) course at IIT