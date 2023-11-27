import { Button, Divider } from "antd";
import React from "react";
import { BarChart } from "../../Components/Chart/BarChart";
import { BarChartReport } from "../../Components/Chart/BarChart-report";
import LineChart from "../../Components/Chart/LineChart";

function Report() {
  return (
    <div>
      <div className="bg-[#ebfaff] p-7 rounded-3xl shadow-lg mt-5 mx-3 max-w-5xl">
        <div className="flex flex-row justify-between">
          <p className="font-bold">Advertisement 1</p>
          <Button>Change Advertisement</Button>
        </div>
        <Divider />
        <div className="flex flex-row justify-between items-center ">
          <p className="max-w-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
            dolores!
          </p>
          <div className="font-bold">
            <p>Target Audience</p>
            <p>Students</p>
          </div>
          <div className="font-bold">
            <p>Budget</p>
            <p>13,000 ETB</p>
          </div>
          <div className="font-bold">
            <p>Duration</p>
            <p>2 Days</p>
          </div>
          <Button>Edit</Button>
        </div>
      </div>
      <div className="">
        <div className="max-w-5xl flex flex-row justify-around">
          <div className="">
            <BarChartReport />
          </div>
          <div className="">
            <LineChart />
          </div>
        </div>
        <div className="max-w-5xl flex flex-row justify-around">
          <div className="">
            <LineChart />
          </div>
          <div className="">
            <BarChartReport />
          </div>
        </div>
        <div className="max-w-5xl flex flex-row justify-around">
          <div className="">
            <LineChart />
          </div>
          <div className="">
            <BarChartReport />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
