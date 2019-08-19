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


const CountryCard = (props) => {
    return(
        <React.Fragment>
            <CountryInfoCard>{props.name}</CountryInfoCard>
        </React.Fragment>
    )
}

export default CountryCard;