import "./App.css";
import { useEffect, useState } from "react";
import { GameDate } from "../src/Components/GameDate/GameDate";
import styled from "styled-components";
import { GameDetails } from "./Components/GameDetails/GameDetails";
import NBALogo from "../src/Media/nbaLogo.png";
import { Quarters } from "./Components/Quarters/Quarters";
import { GameLeaders } from "./Components/GameLeaders/GameLeaders";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [gamedetails, setGameDetails] = useState([]);
  const [date, setDate] = useState("");
  const [gameid, setGameID] = useState("");

  const getGameId = async () => {
    if (date !== "") {
      let response = await fetch(
        `https://api-nba-v1.p.rapidapi.com/games/date/${date}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "f47832579dmshbd8a9344b7fcbc4p1911d1jsn045b1327ed4c",
          },
        }
      );
      let jsonResponse = await response.json();
      setSearchResults(jsonResponse.api.games);
    }
  };

  const getGameData = async (gameId) => {
    let response = await fetch(
      `https://api-nba-v1.p.rapidapi.com/gameDetails/${gameId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "f47832579dmshbd8a9344b7fcbc4p1911d1jsn045b1327ed4c",
        },
      }
    );
    let jsonResponse = await response.json();
    setGameDetails(jsonResponse.api.game[0]);
  };

  useEffect(() => {
    getGameId();
  }, [date, gamedetails]);

  return (
    <div className="App">
      <Container>
        <Header>
          <NbaImg src={NBALogo} />
          <Title>NBA Game Summaries</Title>
        </Header>
        <GameDate
          setSearchResults={setSearchResults}
          setDate={setDate}
          searchResults={searchResults}
          getGameData={getGameData}
        />
        <GameDetails gamedetails={gamedetails} />
        {gamedetails.length !== 0 && <Quarters gamedetails={gamedetails} />}
        {gamedetails.length !== 0 && <GameLeaders gamedetails={gamedetails} />}
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  font-family: "Oswald", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    width: 80%;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  color: white;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    width: 80%;
    margin: 0 auto;
  }
`;

const NbaImg = styled.img`
  width: 10%;
  margin-right: 10px;
`;
