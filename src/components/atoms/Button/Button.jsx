import React from 'react';
import PropTypes from 'prop-types';

import { ButtonOuter } from './button.style';
// import { AnimatedElipsis } from '@atoms';

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

const Button = ({
  buttonText,
  buttonColor,
  buttonFontWeight,
  func,
  link,
  buttonWidth,
  loading,
  opaque,
  slim,
  letterSpacing,
  fontSize,
  padding,
}) => {
  let buttonContent = null;
  if (loading) {
    // buttonContent = <AnimatedElipsis />;
  } else if (buttonText) {
    buttonContent = buttonText;
  }

  return (
    <ButtonOuter
      onClick={func ? func : null}
      fontSize={fontSize}
      buttonFontWeight={buttonFontWeight}
      buttonColor={buttonColor}
      opaque={opaque}
      letterSpacing={letterSpacing}
      buttonFontWeight={buttonFontWeight}
      padding={padding}
    >
      {buttonContent}
      {/* <span className="material-icons">{props.materialIconCode}</span>  */}
      {/* {props.noCaps ? props.ButtonText : props.buttonText.toUpperCase()} */}
    </ButtonOuter>
  );
};

Button.propTypes = {
  // tall: PropTypes.bool,
  // short: PropTypes.bool,
  padding: PropTypes.string,
  slim: PropTypes.bool,
  buttonColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonFontWeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  fontSize: PropTypes.string,
  // noCaps: PropTypes.bool,
  func: PropTypes.func,
  link: PropTypes.bool,
  // mixpanelId: PropTypes.string,
  // withShadow: PropTypes.bool,
  // small: PropTypes.bool,
  buttonWidth: PropTypes.string,
  loading: PropTypes.bool,
  opaque: PropTypes.bool,
  // disabled: PropTypes.bool,
  // disabledStyle: PropTypes.string,
  // materialIconCode: PropTypes.string,
};

export default Button;
