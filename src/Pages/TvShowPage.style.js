import styled from "styled-components";

export const Container = styled.div`

    @media only screen and (min-width: 740px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: 820px) {
        padding: 50px;
        gap: 30px;
    }

    @media only screen and (min-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
    }

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    padding: 20px;
`