import { React, useState } from "react";
import styled from "styled-components";
import { SearchResults } from "../SearchResults/SearchResults";

export const GameDate = ({
  setDate,
  setSearchResults,
  searchResults,
  getGameData,
}) => {
  return (
    <Container>
      <Form>
        <Label>Choose A Date</Label>
        <input type="date" onChange={(e) => setDate(e.target.value)}></input>
      </Form>
      {searchResults !== undefined && (
        <SearchResults
          searchResults={searchResults}
          getGameData={getGameData}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  color: black;
  padding-bottom: 20px;

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    width: 80%;
    margin: 0 auto;
    input::-webkit-calendar-picker-indicator {
      background: none;
      padding: 2px 20px;
    }
  }

  input::-webkit-calendar-picker-indicator {
      background: none;
      padding: 2px 20px;
    }
`;

const Label = styled.label`
  font-family: "Oswald", sans-serif;
  font-size: 18px;
`;
const Form = styled.form`
  background-color: white;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    ::-webkit-datetime-edit-text {
      color: red;
      font-family: "Oswald", sans-serif;
      width: 90%;
    }
  }
`;
