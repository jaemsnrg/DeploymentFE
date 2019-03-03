import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PortalRouter from '../router';
import mediaQueries from './mediaQueries';
import fontFamilies from './fonts';
import text from './text';
import colours from './colours';
import { gridOverrides } from './gridStyleOverrides'

const styles = {
    txtMainHeading: '5rem',
    txtHeading: '2rem',
    txtSubHeading: '2rem',
    txtBody: '1.5rem',
    txtSmall: '0.75rem',
    black: '#373838',
    offWhite: '#e5e5e5',
    mainGrey: '#595959',
    mq: mediaQueries,
    colours,
    text,
  };
  
const GlobalStyle = createGlobalStyle`
  body { 
    overflow-x: hidden;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${gridOverrides}
  }
 

  ${fontFamilies}
`;

 export const AppWithStylesAndRoutes = ({ history }) => {
    return (
        <ThemeProvider theme={styles}>
          <Fragment>
            <GlobalStyle />
            <PortalRouter />
          </Fragment>
        </ThemeProvider>
    );
  };
