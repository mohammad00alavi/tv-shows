import {createGlobalStyle} from "styled-components";
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ErrorContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

export const Home = styled.div`
    a {
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
    }
`