import React from 'react';
import styled from 'styled-components';

const CountryName = styled.div`
    text-align:center;
    color:#fff;
    font-weight:bold;
    font-size:1rem;
    width: calc( 100% - 116px );
`;

const CountryContinent = styled.div`
    color:#fff;
    margin:0 0 10px 0;
`;

const CountryInfoCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc( 100% - 2rem );
    height: 80px;
    clear: both;
    margin: 1rem;
    background:#18293a;
    border-radius: 4px 4px 0 0;
    cursor: pointer;
    @media(min-width: 768px) {
        width: calc( 100% - 1rem );
        margin: 1rem 0 1rem 1rem;
    }
`;

const CountryFlag = styled.div`
    margin: 1rem;
    height: 48px;
    width: 64px;
    border-radius: 3px;
    box-shadow: 0 2px 1px #060e2a;
`;

const CountryMoreInfo = styled.div`
    margin: 1rem;
    margin-top: -1rem;
    padding: 1rem;
    background: #3b4957;
    border-radius: 0 0 4px 4px;
    @media(min-width: 768px) {
        margin: -1rem 0 1rem 1rem;
    }
`;

const CountryLang = styled.div`
    color:#fff;
    line-height:1.2rem;
`;

const Label = styled.span`
    color:#060e15;
    font-weight:bold;
    margin-right:10px;
`;

const CountryCard = (props) => {
    return(
        <React.Fragment>
            <CountryInfoCard>
                <CountryFlag className={`flag-icon-background flag-icon-${props.csscode}`} />
                <CountryName>{props.name}</CountryName>
            </CountryInfoCard>
            <CountryMoreInfo>
                <CountryContinent>
                    <Label>{`Continent: `}</Label>{props.continent}
                </CountryContinent>
                <CountryLang>
                    <Label>{`Languages:`}</Label>{`${props.langs.map(language => (
                        `${language.name}(${language.native})`
                    )).join(' - ')}`}
                </CountryLang>
            </CountryMoreInfo>
        </React.Fragment>
    )
}

export default CountryCard;