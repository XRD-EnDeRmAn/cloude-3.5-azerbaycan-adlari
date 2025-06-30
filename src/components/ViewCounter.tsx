import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const ViewCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("/api/view-counter").then(res => res.json()).then(data => setCount(data.count));
    const interval = setInterval(() => {
      fetch("/api/view-counter").then(res => res.json()).then(data => setCount(data.count));
    }, 300000); // 5 dəqiqədə bir yenilə
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h4 className="font-semibold text-md mb-2">Baxış sayı / Views</h4>
      <Bar
        data={{
          labels: ["Global Views"],
          datasets: [{ label: "Views", data: [count], backgroundColor: "#3b82f6" }]
        }}
        options={{ plugins: { legend: { display: false } } }}
      />
      <div className="mt-2 text-center text-gray-500">{count} baxış</div>
    </div>
  );
};
export default ViewCounter;