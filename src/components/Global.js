import styled from 'styled-components';

const PageContainer = styled.div`    
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 4em;
    flex:1;
    background: rgb(37,49,61);
    background: -moz-linear-gradient(180deg, rgba(37,49,61,1) 0%, rgba(38,53,69,1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(37,49,61,1) 0%, rgba(38,53,69,1) 100%);
    background: linear-gradient(180deg, rgba(37,49,61,1) 0%, rgba(38,53,69,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#25313d",endColorstr="#263545",GradientType=1);
`;

const Message = styled.h1`
    text-align:center;
    color:#8797a9;
    font-family: sans-serif;
    text-transform:Uppercase;
    font-size:2rem;
`;


const LoadingImg = styled.div`
    margin: 0px auto;
    border-radius: 50%;
    border-top:4px solid #465c73;
    width:50px;
    height: 50px;
    animation: 1.64s loading infinite linear;
    transform: translate(-50%, -50%)
`;

export { PageContainer, Message, LoadingImg };