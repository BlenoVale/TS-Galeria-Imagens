import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        width: auto;
        max-height: 9.5em;
        margin-bottom: 10px;
        border-radius: 10px;
        cursor: pointer;
        transition: all ease .3s;

        &:hover {
            opacity: .6;
        }
    }

    .infos {
        display: flex;
        justify-content: space-between;

        .photo-name {
            flex: 1;
        }

        .rightSide-content {
            display: flex;
            gap: 8px;
        }

        button {
            border: none;
            background-color: #fd6085;
            padding: 2px 10px;
            color: #fff;
            border-radius: 10px;
            cursor: pointer;

            &:hover {
                background-color: #d14362;
            }
        }

        .photo-format {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2px 10px;
            background-color: #3899ed;
            font-size: 13px;
            color: #fff;
            border-radius: 10px;
        }
    }

`;