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

export default PageContainer;