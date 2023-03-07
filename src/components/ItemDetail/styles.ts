import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0, 0.8);
    display: flex;
`;

export const DetailArea = styled.div`
    position: absolute;
    top: 10%;
    bottom: 10%;
    left: 20%;
    right: 20%;
    background-color: #ededed;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
`;

export const HeaderDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ImgArea = styled.div`
    padding: 30px;
    padding-top: 0;
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export const OpBtn = styled.button`
    width: 60px;
    height: 60px;
    border: 0;
    background: transparent;
    cursor: pointer;
`;

export const Name = styled.div`
    flex: 1;
    font-size: 25px;
    display: flex;
    justify-content: center;
`;