import { fetchWithAuth } from "@/lib/httpCalls";
import { useQuery } from "@tanstack/react-query";

export const getMockUniversityData = () => {
  let players = [
    { playerName: "Alice", playerScore: Math.floor(Math.random() * 100) },
    { playerName: "Bob", playerScore: Math.floor(Math.random() * 100) },
    { playerName: "Charlie", playerScore: Math.floor(Math.random() * 100) },
    { playerName: "David", playerScore: Math.floor(Math.random() * 100) },
    { playerName: "Eve", playerScore: Math.floor(Math.random() * 100) },
  ];

  players = players.sort((a, b) => b.playerScore - a.playerScore);

  const exampleData: UniversityData = {
    uniName: "University of Groningen",
    uniRank: Math.floor(Math.random() * 100),
    uniScore: Math.floor(Math.random() * 100),
    players: players,
  };

  return exampleData;
};

export const useUniversityDataQuery = () => {
  // const url = `${process.env.NEXT_PUBLIC_API_URL}/api/university`;

  // return useQuery({
  //     queryKey: ["useUniversityDataQuery"],
  //     queryFn: async () => fetchWithAuth<UniversityData>(url),
  //     refetchInterval: 1000 * 10, // 10 seconds
  // });

  return useQuery({
    queryKey: ["useUniversityDataQuery"],
    queryFn: async () => getMockUniversityData(),
    refetchInterval: 1000 * 10, // 10 seconds
  });
};

export const useLeaderboard = () => {
  const universityDataQuery = useUniversityDataQuery();

  return {
    universityData: universityDataQuery.data,
    isLoading: universityDataQuery.isLoading,
    isError: universityDataQuery.isError,
  };
};
