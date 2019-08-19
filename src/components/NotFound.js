import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: "Lobster Two", cursive;
  font-size: 1.5rem;
  text-align: center;
  color: #000;
`;

const NotFound = () =>{
    return(
        <Title>Page Not Found!</Title>
    )
}

export default NotFound;