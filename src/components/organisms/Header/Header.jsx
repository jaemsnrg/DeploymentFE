import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './header.style';
import { LogoDeploy } from '@atoms';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <LogoDeploy />
      </Wrapper>
    );
  }
}

export default Header;
