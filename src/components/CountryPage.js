import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { PageContainer, Message, LoadingImg } from './Global';
import Header from './Header';

const CountryFlag = styled.div`
    margin: 1rem auto;
    height: 48px;
    width: 64px;
    border-radius: 3px;
    box-shadow: 0 2px 1px #060e2a;
`;

const CoutryPageCard = styled.div`
    background: #2c3e50;
    border-radius: 4px 4px 0 0;
    padding: 2rem;
`;

const CountryName = styled.h1`
    font-size:4rem; 
    text-align:center;
    margin-bottom:1rem;
    color:#fff;
    @media(max-width: 767px) {
        font-size:2rem; 
    }    
`;
const Currency = styled.h3`
    font-size:2rem; 
    text-align:center;
    margin-bottom:1rem;
    color:#637a92;
`;
const AreaCode = styled.h3`
    font-size:2rem; 
    text-align:center;
    margin-bottom:1rem;
    color:#637a92;
`;
const Labels = styled.h2`
    text-align:center;
    color: #060e15;
    font-weight: bold;
`;

const CountryPageContainer = styled(PageContainer)`
    align-items: center;
    padding-top:50px;
`;

const CountryPage = ({ match }) => {
    const { loading, error, data } = useQuery(gql`
        {
            country(code: "${match.params.code}") {
                name
                code
                phone
                currency
            }
        }
    `);
    const thiscountry = data.country;
    const COUNTRY_FLAG = match.params.code;
    if (loading) return (<PageContainer><LoadingImg /><Message><br />Loading</Message></PageContainer>) ;
    if (error) return (<PageContainer><Message><br />{`Error! ${error.message}`}</Message></PageContainer>);
    return(
        <CountryPageContainer>
            <Header />
            <CoutryPageCard>
                <CountryFlag className={`flag-icon-background flag-icon-${COUNTRY_FLAG.toLowerCase()}`}/>
                <CountryName>{thiscountry.name}</CountryName>
                <Labels>Currency:</Labels>
                <Currency>{thiscountry.currency}</Currency>
                <Labels>Area Phone Code:</Labels>
                <AreaCode>{`+${thiscountry.phone}`}</AreaCode>
            </CoutryPageCard>
        </CountryPageContainer>
    )
}


export default CountryPage