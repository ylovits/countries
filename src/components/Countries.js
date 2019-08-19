import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { PageContainer, Message, LoadingImg } from './Global';
import CountryCard from './CountryCard';


const CountriesGrid = styled.section`
  padding-top:50px;
  @media(min-width: 768px) {
      width: calc(100% - 1rem);
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
  }
`;

const SingleCountry = styled(Link)`
    text-decoration:none;
    @media(min-width: 768px) {
        width: 33%;
    }
`;

const GET_COUNTRIES = gql`
    {
        countries {
            name
            code
            continent {
                name
            }
            languages {
                code
                native
                name
            }
        }
    }
`;


const Countries = () => {
    const { loading, error, data } = useQuery(GET_COUNTRIES);
    const allcountries = data.countries;
    if (loading) return (<PageContainer><LoadingImg /><Message><br />Loading</Message></PageContainer>) ;
    if (error) return (<PageContainer><Message><br />{`Error! ${error.message}`}</Message></PageContainer>);
    return (
        <React.Fragment>
            <CountriesGrid>
                {
                    allcountries.map( (country, i) => (
                        <SingleCountry key={i} to={`/countries/${country.code}`}>
                            <CountryCard name={`${country.name}`} />
                        </SingleCountry>
                    ))
                }
            </CountriesGrid>
        </React.Fragment>
    )
}

export default Countries;