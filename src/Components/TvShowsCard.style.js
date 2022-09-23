import styled from "styled-components";

export const CardContainer = styled.div`

    @media only screen and (min-width: 740px) {
        height: 550px; 
        padding: 20px;
    }
    
    padding: 10px;
    height: 500px; 
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    overflow: hidden;

    > a {
        text-decoration: none;
        cursor: pointer;
        color: #000;
    }
`

export const ShowImage = styled.img`
    width: 210px;
`


export const ShowInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const ShowTitle = styled.h2`
    margin-top: 5px;
    font-size: 1.2rem;
    padding-left: 10px;
`

export const ShowDescription = styled.div`
    margin-top: 5px;
    font-size: 1rem;
    padding-left: 10px;

    span {
        display: block;
        margin-top: 7px;
        color: gray;
    }
`

