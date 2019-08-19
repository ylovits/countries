import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { PageContainer, Message, LoadingImg } from './Global';
import Header from './Header';

const CoutryPageCard = styled.div`
    background: #2c3e50;
    border-radius: 4px 4px 0 0;
    padding: 2rem;
`;

const CountryPage = () => {
    return(
        <PageContainer>
            <Header />
            <CoutryPageCard>Country</CoutryPageCard>
        </PageContainer>
    )
}

export default CountryPage