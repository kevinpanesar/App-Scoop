import { React, useState } from 'react'
import styled from 'styled-components';

export const GameDetails = ({ gameData }) => {

    let jsx;

    if (gameData !== undefined) {
        jsx = (<div>
            <div>{gameData.Arena}</div>
            <div>{gameData.city}</div>
            <div>{gameData.gameDuration}</div>
        </div>)
    }
    return (<Container>
        {jsx}
    </Container>)
}

const Container = styled.div`
width: 90%;
color: white;
`