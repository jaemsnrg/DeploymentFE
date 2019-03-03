import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: block;
  position: relative;
`;

export const TextPartOne = styled.div`
    display: inline-block;
    ${({ theme }) => theme.text.t1}
    font-size: 1.8rem !important;
    color: ${({ theme }) => theme.colours.black};
    ${({ theme }) => theme.mq.atTablet`
        
    `};
`;

export const TextPartTwo = styled.div`
    display: inline-block;
    ${({ theme }) => theme.text.t1}
    font-size: 1.8rem !important;
    color: ${({ theme }) => theme.colours.redLight}; //#f3c4c0
    ${({ theme }) => theme.mq.atTablet`
        
    `};
`;
