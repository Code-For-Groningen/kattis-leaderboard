import { FC } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Text,
  XAxis,
  YAxis,
} from "recharts";

interface UniversityChartProps {
  data: University;
}
interface TransformedData {
  [key: number]: {
    [key: string]: number | string;
  };
}

const transformData = (data: Player[]) => {
  let newData: TransformedData = {};
  data.forEach((player) => {
    player.scoreHistory.forEach((score) => {
      if (!(score.date in newData)) {
        newData[score.date] = { date: score.date };
      }
      newData[score.date][player.playerName] = score.score;
    });
  });
  return Object.values(newData);
};

const UniversityChart: FC<UniversityChartProps> = ({ data }) => {
  const top5Names = data.players.slice(0, 5).map((player) => player.playerName);

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="w-full text-2xl font-bold">
        {data.universityName} ({data.universityRank})
      </h2>
      <p className="w-full text-2xl font-bold">Score: {data.universityScore}</p>

      <LineChart width={800} height={400} data={transformData(data.players)}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        {top5Names.map((name) => (
          <Line type="monotone" dataKey={name} key={name} />
        ))}
        <YAxis />
      </LineChart>
    </div>
  );
};

export default UniversityChart;
