import styled from 'styled-components';

export const ButtonOuter = styled.button`
  width: 100%;
  display: inline-block;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  outline: none;
  padding: ${({ padding }) => (padding ? padding : '4px')};
  ${({ theme, fontSize }) => (fontSize ? theme.text[fontSize] : theme.text.bs)};
  color: ${({ buttonColor, theme }) =>
    buttonColor === 'inverted' ? theme.colours.blueDark : 'white'};
  border: 0.5px solid ${({ theme }) => theme.colours.blueDark};
  background-color: ${({ buttonColor, theme }) =>
    buttonColor === 'inverted' ? 'white' : theme.colours.blueDark};
  opacity: ${({ opaque }) => (opaque ? 0.5 : 1)};
  font-weight: ${({ buttonFontWeight }) => (buttonFontWeight === 'bold' ? 'bold' : 'normal')};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
`;
/*

${({tall, theme}) => {
    try {
        if (tall) {
            return `padding: 10px;`
        }
    } catch (error) {}
}};

${({theme}) => theme.mq.atTablet`
    ${({tall, theme}) => {
        try {
            if (tall) {
                return `padding: 14px;`
            }
        } catch (error) {}
    }};

`}

${(props) => props.theme.mq.atDesktop`
    ${({tall, theme}) => {
        try {
            if (tall) {
                return theme.text.bxlMedium
            }
        } catch (error) {}
    }};

`}

*/
