import React from 'react';
import PropTypes from 'prop-types';
import { LinkWrapper } from './link.style';

const Link = (props) => {
  const onClick = (event) => {
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <LinkWrapper
      largeLink={props.largeLink}
      mediumLink={props.mediumLink}
      medLink={props.medLink}
      href={props.linkLocation}
      onClick={onClick}
      color={props.color}
      
    >
      {props.linkTitle}
    </LinkWrapper>
  );
};

Link.propTypes = {
  mediumLink: PropTypes.bool,
  largeLink: PropTypes.bool,
  linkLocation: PropTypes.string,
  linkTitle: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

export default Link;
