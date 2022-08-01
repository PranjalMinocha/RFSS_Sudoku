import React, {useState} from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const ProgressGraph = () => {
  const Data = [
    {
      iteration: 1,
      accuracy: 40,
    },
    {
      iteration: 2,
      accuracy: 60,
    },
    {
      iteration: 3,
      accuracy: 70,
    },
    {
      iteration: 4,
      accuracy: 65,
    },
    {
      iteration: 5,
      accuracy: 90,
    },
  ];

  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.iteration),
    datasets: [
      {
        label: "Accuracy",
        data: Data.map((data) => data.accuracy),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="ui container">
      <div style={{ width: 600}}>
        <Line data={userData} />
      </div>
    </div>
  );
}

export default ProgressGraph;