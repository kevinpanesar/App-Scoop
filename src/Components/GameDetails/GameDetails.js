import { React, useState } from "react";
import styled from "styled-components";

export const GameDetails = ({ gamedetails }) => {
  let components;
  console.log(gamedetails);

  if (gamedetails.length == 0) {
    components = <div></div>;
  } else {
    components = (
      <Container>
        <TeamsContainer>
          <ImageNameScoreContainer>
            <FullTeamName>{gamedetails.hTeam.fullName}</FullTeamName>
            <TeamLogos src={gamedetails.hTeam.logo} />
            <Score>{gamedetails.hTeam.score.points}</Score>
          </ImageNameScoreContainer>
          <ImageNameScoreContainer>
            <FullTeamName>{gamedetails.vTeam.fullName}</FullTeamName>
            <TeamLogos src={gamedetails.vTeam.logo} />
            <Score>{gamedetails.vTeam.score.points}</Score>
          </ImageNameScoreContainer>
        </TeamsContainer>
      </Container>
    );
  }

  return <div>{components}</div>;
};

const Container = styled.div`
  width: 100%;
  color: black;
  background-color: white;
  margin: 0 auto;
  padding-top: 20px;
`;

const FullTeamName = styled.p`
  font-size: 24px;
`;

const TeamsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const TeamLogos = styled.img`
  width: 45%;
`;
const ImageNameScoreContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Score = styled.p`
  font-size: 30px;
  font-weight: 700;
`;
