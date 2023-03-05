import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 130px;
    box-shadow: 1px 1px 8px #ccc;
    display: flex;
    justify-content:center;
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