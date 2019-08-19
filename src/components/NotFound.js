import React from 'react';
import styled from 'styled-components';
import PageContainer from './Global';

const Title = styled.h1`
  font-family: "Lobster Two", cursive;
  font-size: 1.5rem;
  text-align: center;
  color: #ffffff;
`;

const NotFound = () =>{
    return(
        <PageContainer>
            <Title>Page Not Found!</Title>
        </PageContainer>
    )
}

export default NotFound;