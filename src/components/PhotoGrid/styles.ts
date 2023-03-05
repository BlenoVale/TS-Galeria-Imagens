import styled from "styled-components";

export const Container = styled.div`
    min-width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: min-content;
    grid-gap: 10px;
`;
