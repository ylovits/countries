import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: "Lobster Two", cursive;
  font-size: 4.5rem;
  text-align: center;
  color: #000;
`;

const Home = () =>{
    return(
        <Title>Welcome<br />And Have Fun!</Title>
    )
}

export default Home;