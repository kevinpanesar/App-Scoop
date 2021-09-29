import { React, useState } from 'react'
import styled from 'styled-components';

export const SearchResults = ({ searchResults, getGameData }) => {

    console.log(searchResults);

    return (<Container>
        {searchResults.map(element => {
            return (<SearchResult>
                <div>{element.hTeam.nickName + ' vs ' + element.vTeam.nickName}</div>
                <SelectGameButton onClick={() => getGameData()}>Select Game</SelectGameButton>
            </SearchResult>);
        })}
    </Container>)
}

const Container = styled.div`
width: 90%;
`

const SearchResult = styled.div`
width: 100%;
height: 60px;
border: 2px solid black;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
color: white;
`

const SelectGameButton = styled.button`
background-color: white;
border: none;
`