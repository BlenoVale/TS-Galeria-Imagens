import { style } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const UploadFileName = styled.div`
    font-size: 13px;
`;

export const Button = styled.button`
    height: 36px;
    padding: 0 25px;
    border: none;
    border-radius: 20px;
    background-color: #3899ed;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
    transition: all ease .4s;

    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
        opacity: .8;
    }
`;

export const HiddenInput = styled.input`
    display: none;
`;