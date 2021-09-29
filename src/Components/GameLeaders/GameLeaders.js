import { React, useState } from "react";
import styled from "styled-components";

export const GameLeaders = ({ gamedetails }) => {
  const Team1Leaders = gamedetails.hTeam.leaders;
  const Team2Leaders = gamedetails.vTeam.leaders;

  return (
    <Container>
      <GameLeadersTitle>Game Leaders</GameLeadersTitle>
      <TeamsContainer>
        <Team1Container>
          <TeamNickName>{gamedetails.hTeam.nickname}</TeamNickName>
          {Team1Leaders.map((element) => (
            <PlayerNames>{element.name}</PlayerNames>
          ))}
        </Team1Container>
        <Team2Container>
          <TeamNickName>{gamedetails.vTeam.nickname}</TeamNickName>
          {Team2Leaders.map((element) => (
            <PlayerNames>{element.name}</PlayerNames>
          ))}
        </Team2Container>
      </TeamsContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  color: black;
  padding-bottom: 20px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TeamsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  margin: 0 auto;
`;

const Team1Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px solid black;
`;
const Team2Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GameLeadersTitle = styled.p`
  font-size: 23px;
  margin: 0 auto;
  margin-bottom: 15px;
`;

const TeamNickName = styled.p`
  font-size: 20px;
  font-weight: 600;
  border-bottom: 2px solid black;
  width: 100%;
`;

const PlayerNames = styled.p`
  font-size: 19px;
`;
