import styled from 'styled-components';

export const LinkWrapper = styled.a`
  text-decoration: none;
  color: ${({ theme, color }) => color ? theme.colours[color] : theme.colours.blueDark};
  ${({largeLink, mediumLink, medLink, theme}) => {
    try {
      if (largeLink) {
        return theme.text.bxlMedium
      } else if (mediumLink) {
        return theme.text.bm
      } else if (medLink) {
        return theme.text.bmMedium
      } else {
        return theme.text.bsMedium
      }
    } catch (error) {}
  }};
  &:hover {
    text-decoration: underline !important;
    cursor: pointer;
  }

`