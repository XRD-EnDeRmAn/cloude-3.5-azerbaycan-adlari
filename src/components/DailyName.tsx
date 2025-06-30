import React, { useMemo } from "react";
import namesData from "../../public/names.json";
import NameCard from "./NameCard";

function getDailyIndex() {
  const today = new Date().toISOString().slice(0, 10);
  let hash = 0;
  for (let i = 0; i < today.length; i++) hash += today.charCodeAt(i);
  return hash % namesData.length;
}

const DailyName: React.FC = () => {
  const dailyName = useMemo(() => namesData[getDailyIndex()], []);
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-lg mb-2">Günün adı / Name of the Day</h3>
      <NameCard name={dailyName} />
    </div>
  );
};

export default DailyName;