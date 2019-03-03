import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ButtonWrapper, LinkWrapper } from './selector.style';
import { Button, Link } from '@atoms';

const Selector = () => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Button buttonText="SHIP IT" fontSize={'bl'} padding={'6px'} />
      </ButtonWrapper>
      <LinkWrapper>
        <Link linkTitle="CANCEL" largeLink={true} color={'redLight'} />
      </LinkWrapper>
    </Wrapper>
  );
};

export default Selector;
