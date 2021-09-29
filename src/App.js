import './App.css';
import { useEffect, useState } from 'react'
import { GameDate } from '../src/Components/GameDate/GameDate';
import styled from 'styled-components'
import { GameDetails } from './Components/GameDetails/GameDetails';



function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [gamedetails, setGameDetails] = useState([]);
  const [date, setDate] = useState('');
  const [gameid, setGameID] = useState('');

  const getGameId = async () => {
    let response = await fetch(`https://api-nba-v1.p.rapidapi.com/games/date/2018-10-18`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "f47832579dmshbd8a9344b7fcbc4p1911d1jsn045b1327ed4c"
      }
    })
    let jsonResponse = await response.json();
    setSearchResults(jsonResponse.api.games);
  }

  const getGameData = async () => {
    let response = await fetch("https://api-nba-v1.p.rapidapi.com/gameDetails/4395", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "f47832579dmshbd8a9344b7fcbc4p1911d1jsn045b1327ed4c"
      }
    })
    let jsonResponse = await response.json();
    setGameDetails(jsonResponse.api.game[0]);
    console.log(gamedetails)
  }


  useEffect(() => {
    getGameId();
  }, [date])

  return (
    <div className="App">
      <Container>
        <GameDate setSearchResults={setSearchResults} setDate={setDate} searchResults={searchResults} getGameData={getGameData} />
        <GameDetails gamedetails={gamedetails} />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
background-color: black;
height: 100vh;
`