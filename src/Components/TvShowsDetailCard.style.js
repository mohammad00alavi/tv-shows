import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TvShowInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

export const TvShowInfoContainer = styled.div`

    @media only screen and (min-width: 860px) {
        width: 800px;
    }

    width: 100%
    display: flex;
`

export const ShowTitle = styled.h1`
    font-size: 1.5rem;

`

export const ShowImage = styled.img`
    width: 300px;
`

export const ShowDescription = styled.div`
    font-size: 1rem;
    padding-left: 10px;
`

export const EpisodeText = styled.p`
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 15px;
`

export const EpisodesContainer = styled.div`

    @media only screen and (min-width: 860px) {
        width: 800px;
    }

    margin-top: 30px;
    width: 100%;

    li {
        list-style: none;   
    }

    ul {

        @media only screen and (min-width: 500px) {
            grid-template-columns: repeat(2,1fr);
        }

        @media only screen and (min-width: 860px) {
            grid-template-columns: repeat(3,1fr);
        }

        display: grid;
        grid-template-columns: repeat(1,1fr);
        gap: 7px;
    }

    a {
        color: #000;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const Home = styled.a`
    width: 100px;
    text-align: center;
    margin-top: 30px;
    padding: 15px;
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    background-color: gray;
    transition: background-color .3s ease-out;
    &:hover {
        background-color: #333;
    }
`

export const Back = Home;