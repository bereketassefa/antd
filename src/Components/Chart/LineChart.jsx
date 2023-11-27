import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    title: {
      display: true,
      text: "",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const labeldata = [2, 3, 4, 4, 5, 6, 7];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labeldata,
      backgroundColor: "gray",
    },
  ],
};

function LineChart() {
  return <Line className="w-1/2" options={options} data={data} />;
}

export default LineChart;
