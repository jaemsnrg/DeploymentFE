import React from 'react';
import PropTypes from 'prop-types';

import c from './button.scss';

// props
// buttonText [*] - determines text value of button
// buttonWidth [*] - set width of button in px, % etc
// buttonColor [blue, white] - determines fill theme of button
// func [*] - sets function to call when button is clicked
// tall - adds extra height padding around the text.
// noCaps - Provide as true if you don't want the button text to be all capitalised.
// link - A boolean indicating whether or not the button is a link.
// href - Used as the link location for a link represented by a button.
// withShadow - A boolean indicating whether or not the button should cast a shadow.
// small - A stylistic prop that allows us to produce buttons with smaller text that is not bold.

const Button = (props) => {
  const styles = {
    width: props.buttonWidth,
  };

  const classes = [props.small ? 'text__bs--medium' : 'text__bm--bold', c.standardButton];

  if (props.small) {
    classes.push(c['standardButton--small'], c['materialIconSize--small']);
  }
  props.tall === true ? classes.push(c['standardButton--tall']) : null;
  props.short === true ? classes.push(c['standardButton--short'], 'text__searchInput') : null;

  switch (props.buttonColor) {
    case 'white':
      classes.push(c.white);
      break;
    case 'whiteNoBorder':
      classes.push(c.whiteNoBorder);
      break;
    case 'blue':
      classes.push(c.blue);
      break;
    case 'whiteBlue':
      classes.push(c.whiteBlue);
    case 'blueBlue':
      classes.push(c.blueBlue);
      break;
  }

  if (props.disabled && props.disabledStyle === 'form') {
    classes.push(c['form--disabled']);
  }

  if (props.disabled && props.disabledStyle === 'standard') {
    classes.push(c['standard--disabled']);
  }

  if (props.withShadow) {
    classes.push(c['standardButton--withShadow']);
  }

  if (props.link) {
    return (
      <a
        onClick={props.func}
        style={styles}
        className={classes.join(' ')}
        id={props.mixpanelId}
        href={props.href}
      >
      <span className="material-icons">{props.materialIconCode}</span> 
        {props.noCaps ? props.buttonText : props.buttonText.toUpperCase()}
      </a>
    );
  }
  return (
    <button disabled={props.disabled} onClick={props.func} style={styles} className={classes.join(' ')} id={props.mixpanelId}>
      <span className="material-icons">{props.materialIconCode}</span> 
      {props.noCaps ? props.buttonText : props.buttonText.toUpperCase()}
    </button>
  );
};

Button.defaultProps = {
  tall: true,
};

Button.propTypes = {
  tall: PropTypes.bool,
  short: PropTypes.bool,
  buttonColor: PropTypes.string,
  buttonText: PropTypes.string,
  noCaps: PropTypes.bool,
  func: PropTypes.func,
  link: PropTypes.bool,
  mixpanelId: PropTypes.string,
  withShadow: PropTypes.bool,
  small: PropTypes.bool,
  buttonWidth: PropTypes.string,
  disabled: PropTypes.bool,
  disabledStyle: PropTypes.string,
  materialIconCode: PropTypes.string,
};

export default Button;
