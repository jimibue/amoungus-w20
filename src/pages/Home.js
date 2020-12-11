import Axios from "axios";
import { useState, useEffect } from "react";
import PlayerForm from "../components/PlayerForm";
import PlayersBoard from "../components/PlayersBoard";

const dummyData = [
  {
    id: 1,
    name: "jon",
    nickname: "Simon",
    total_games: 0,
    times_imposter: 0,
    imposter_wins: 0,
    times_crew: 0,
    crew_wins: 0,
  },
  {
    id: 2,
    name: "jan",
    nickname: "limon",
    total_games: 12,
    times_imposter: 12,
    imposter_wins: 0,
    times_crew: 0,
    crew_wins: 0,
  },
  {
    id: 3,
    name: "Frank",
    nickname: "we",
    total_games: 0,
    times_imposter: 0,
    imposter_wins: 0,
    times_crew: 0,
    crew_wins: 0,
  },
];
export default () => {
  useEffect(() => {
    getPlayers();
  }, []);

  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // id number 1,2, etc stat is going to be the key 'total_games','crew_wins',etc
  const incrementUserStat = (id, stat) => {
    // const player = players.find((p) => p.id == id);
    // Axios.put(`localhost/players/${id}`, { [stat]: player[stat] + 1 })
    //   .then((res) => {
    //     //update UI after succesupdating database
    //     let newPlayers = players.map((p) => {
    //       if (p.id !== id) return p;
    //       return res.data
    //     });

    //     setPlayers(newPlayers);
    //   })
    //   .catch((err) => {});

    let newPlayers = players.map((p) => {
      if (p.id !== id) return p;
      return { ...p, [stat]: p[stat] + 1, total_games: p.total_games + 1 };
      // return res.data
    });

    setPlayers(newPlayers);
  };
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

  const addPlayer = (player) => {
    setPlayers([
      ...players,
      {
        ...player,
        id: Math.random(),
        total_games: 0,
        times_imposter: 0,
        imposter_wins: 0,
        times_crew: 0,
        crew_wins: 0,
      },
    ]);
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
      <div onClick={() => incrementUserStat(1, "crew_wins")}>test</div>
      <PlayerForm addUser={addPlayer} />
      <PlayersBoard players={players} incrementUserStat={incrementUserStat} />
    </div>
  );
};
