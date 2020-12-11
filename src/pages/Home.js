import Axios from "axios";
import { useState, useEffect } from "react";
import PlayerForm from "../components/PlayerForm";
import PlayersBoard from "../components/PlayersBoard";

const dummyData = [
  {
    name: "jon",
    nickname: "Simon",
    total_games: 12,
    times_imposter: 12,
    imposter_wins: 12,
    times_crew: 22,
    crew_wins: 12,
  },
  {
    name: "jan",
    nickname: "limon",
    total_games: 22,
    times_imposter: 12,
    imposter_wins: 12,
    times_crew: 42,
    crew_wins: 12,
  },
  {
    name: "Frank",
    nickname: "we",
    total_games: 42,
    times_imposter: 12,
    imposter_wins: 12,
    times_crew: 25,
    crew_wins: 2,
  },
];
export default () => {
  useEffect(() => {
    getPlayers();
  }, []);

  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const getPlayers = async () => {
    try {
      // let res = await Axios.get("somelink/players");
      // setPlayers(res.data)// TODO use respon to set players
      setPlayers(dummyData); // TODO use respon to set players
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading </h1>;
  }

  if (error) {
    return <h1>Error Occured</h1>;
  }
  return (
    <div>
      <h1>Board here</h1>
      <PlayerForm />
      <PlayersBoard players={players} />
    </div>
  );
};
