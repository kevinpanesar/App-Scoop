import { React, useState } from "react";
import styled from "styled-components";

export const Quarters = ({ gamedetails }) => {
  const team1Score = gamedetails.hTeam.score.linescore;
  const team2Score = gamedetails.vTeam.score.linescore;

  return (
    <Container>
      <PeriodSummaryTitle>PERIOD SUMMARY</PeriodSummaryTitle>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>1st</th>
            <th>2nd</th>
            <th>3rd</th>
            <th>4th</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{gamedetails.hTeam.nickname}</td>
            <td>{team1Score[0]}</td>
            <td>{Number(team1Score[0]) + Number(team1Score[1])}</td>
            <td>
              {Number(team1Score[0]) +
                Number(team1Score[1]) +
                Number(team1Score[2])}
            </td>
            <td>
              {Number(team1Score[0]) +
                Number(team1Score[1]) +
                Number(team1Score[2]) +
                Number(team1Score[3])}
            </td>
          </tr>
          <tr>
            <td>{gamedetails.vTeam.nickname}</td>
            <td>{team2Score[0]}</td>
            <td>{Number(team2Score[0]) + Number(team2Score[1])}</td>
            <td>
              {Number(team2Score[0]) +
                Number(team2Score[1]) +
                Number(team2Score[2])}
            </td>
            <td>
              {Number(team2Score[0]) +
                Number(team2Score[1]) +
                Number(team2Score[2]) +
                Number(team2Score[3])}
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  color: black;
  padding-bottom: 40px;
  font-size: 20px;
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    width: 80%;
    margin: 0 auto;
  }
`;

const PeriodSummaryTitle = styled.p`
  font-size: 22px;
`;

const Table = styled.table`
  width: 95%;
  margin: 0 auto;
`;
