import { FC } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

interface UniversityChartProps {
  data: UniversityData;
}

const UniversityChart: FC<UniversityChartProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="w-full text-2xl font-bold">
        {data.uniName} ({data.uniRank})
      </h2>
      <p className="w-full text-2xl font-bold">Score: {data.uniScore}</p>

      <BarChart width={400} height={400} data={data.players}>
        <Bar type="monotone" dataKey="playerScore" stroke="#8884d8" />
        <XAxis dataKey="playerName" />
        <YAxis />
      </BarChart>
    </div>
  );
};

export default UniversityChart;
