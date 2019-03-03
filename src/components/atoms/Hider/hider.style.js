import styled from "styled-components";

export const Wrapper = styled.div`
    ${({ theme }) => theme.mq.atTablet`
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({ theme }) => theme.colours.redLight};
    `};

`