import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid #aed7e5;
    padding: 5px;
    border-radius: 50px;
    transition: all ease .5s;

    &:focus {
        border: 1px solid #3899ed;
    }
`;

export const Input = styled.input`
    flex: 1;
    outline: none;
    border: none;
    font-size: 16px;
`;