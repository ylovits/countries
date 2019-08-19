import React from 'react';
import styled from 'styled-components';

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

const CountryCard = (props) => {
    return(
        <React.Fragment>
            <CountryInfoCard>{props.name}<CountryFlag className={`flag-icon-background flag-icon-${props.csscode}`} /></CountryInfoCard>
        </React.Fragment>
    )
}

export default CountryCard;