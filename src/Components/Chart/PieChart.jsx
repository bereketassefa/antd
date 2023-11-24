// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <Chart type="doughnut" data={chartData} options={{}} />
      {/* <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      /> */}
    </div>
  );
}
export default PieChart;
