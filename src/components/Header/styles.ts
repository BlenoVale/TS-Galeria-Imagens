import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 130px;
    box-shadow: 2px 2px 8px #bbb;
    display: flex;
    justify-content:center;
    background-color: #fff;
`;

export const ContentArea = styled.div`
    width: 90%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: #3c4043;
`;

export const Options = styled.div`
    flex: 1;
    display: flex;
    align-items: end;
    justify-content: space-between;
`;