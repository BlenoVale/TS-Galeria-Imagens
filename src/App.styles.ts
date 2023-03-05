import styled from "styled-components";

export const Container = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    display: flex;
    justify-content:center;
    background-color: #f9f9fb;
`;

export const Main = styled.div<{ loading: number }>`
    width: 90%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    padding-top: ${props => props.loading === 1 ? '200px' : '150px'};
`;

