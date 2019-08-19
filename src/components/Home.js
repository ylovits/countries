import React from 'react';
import styled from 'styled-components';
import PageContainer from './Global';

const Title = styled.h1`
  font-family: "Lobster Two", cursive;
  font-size: 4.5rem;
  text-align: center;
  color: #ffffff;
`;

const Home = () =>{
    return(
        <PageContainer>
            <Title>Welcome<br />And Have Fun!</Title>
        </PageContainer>
    )
}

export default Home;