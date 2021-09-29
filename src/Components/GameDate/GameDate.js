import { React, useState } from 'react'
import styled from 'styled-components';
import { SearchResults } from '../SearchResults/SearchResults';

export const GameDate = ({ setDate, setSearchResults, searchResults, getGameData }) => {

    return (<Container>
        <Form>
            <Label>Choose A Date</Label>
            <input type="date" onChange={e => setDate(e.target.value)} ></input>
        </Form>
        {searchResults !== undefined && <SearchResults searchResults={searchResults} getGameData={getGameData} />}
    </Container>)
}

const Container = styled.div`
background-color: black;
`
const Label = styled.label`
color: white;
`
const Form = styled.form`
background-color: red;
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`