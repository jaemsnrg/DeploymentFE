import React from 'react';
import PropTypes from 'prop-types';

// import AutoRenew from '@material-ui/icons/AutoRenew';
import OpenInNew from '@material-ui/icons/OpenInNew';
import { Wrapper, StatusType, StatusHeading, StatusText, IconWrapper } from './statusBox.style';

const statusMapping = () => {

}

const StatusBox = ({status, heading, text}) => {
    return ( 
        <Wrapper>
            <StatusType status={status} />
            <StatusHeading>{heading}</StatusHeading>
            <StatusText>{text}</StatusText>
            <IconWrapper>
                <OpenInNew />
            </IconWrapper>
        </Wrapper>
     );
}
 
export default StatusBox;