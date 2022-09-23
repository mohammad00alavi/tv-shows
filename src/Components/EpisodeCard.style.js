import styled from "styled-components";

export const EpisodeContainer = styled.div`

    @media only screen and (min-width: 800px) {
        width: 800px;
    }
    
    padding: 30px;
    margin: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const EpisodeImage = styled.img`

    @media only screen and (min-width: 800px) {
        width: 600px;
    }

    width: 100%;
    margin: auto;
    margin-bottom: 20px;
`

export const EpisodeInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

export const EpisodeTitle = styled.h1`
    font-size: 1.5rem;
`

export const EpisodeDescription = styled.div`
    font-size: 1rem;
    padding-left: 10px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`