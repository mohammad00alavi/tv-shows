import React from 'react';
import { Link } from 'react-router-dom';
import {Home,ErrorContainer,GlobalStyle} from "./ErrorPage.style";

function ErrorPage () {
  return (
    <>
      <GlobalStyle/>
      <ErrorContainer>
        <div>This page not found 404</div>
        <Home>
          <Link to={"/"}>Home</Link>
        </Home>
      </ErrorContainer>
    </>
  )
}

export default ErrorPage
