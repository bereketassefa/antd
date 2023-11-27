import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import PieChart from "../../Components/Chart/PieChart";
import { DatePicker } from "antd";
import { BarChart } from "../../Components/Chart/BarChart";
import Table from "../../Components/Chart/Tablee";

function Advertisement() {
  const onChange = () => {
    return;
  };
  const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        labels: Data.map((data) => data.year),
        // label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["#d71a62", "#fbc8db", "#f3ba2f", "#2a71d0"],
        borderColor: "black",
        borderWidth: 0,
      },
    ],
  });

  return (
    <div>
      <div className="flex flex-row space-x-4 content-center">
        <Link to="" className="text-black font-bold">
          Dashboard
        </Link>
        <Link to="" className="text-gray-400">
          Management
        </Link>
        <Link to="" className="text-gray-400">
          Report
        </Link>
        <Link to="" className="text-gray-400">
          Account Setting
        </Link>
        <Button type="primary" danger>
          Create Advertisement
        </Button>
      </div>
      <div className="flex flex-row my-7">
        <PieChart chartData={chartData} />
        <PieChart chartData={chartData} />
      </div>
      <h3 className="text-lg font-medium text-black pt-7 ">
        Monthly Advertisement Anaytics
      </h3>
      <p className="text-sm">For top performing advertisements</p>
      <DatePicker
        onChange={onChange}
        picker="month"
        className="border-2 border-gray-700 my-2"
      />
      <div className="flex flex-row my-7 w-96">
        {/* <PieChart chartData={chartData} /> */}
        <BarChart />
      </div>
      <h3 className="text-lg font-medium text-black py-4 ">
        Top preforming advertisiment
      </h3>
      <div className="w-1/2">
        <Table />
      </div>
    </div>
  );
}

export default Advertisement;
