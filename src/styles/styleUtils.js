import styled, { css, keyframes } from 'styled-components';

export const Spacer = styled.div`
        height: ${({height}) => {
        if(height == 'tall') {
            return '300px'
        } else if ( height == 'medium') {
            return '150px'
        } else if ( height == 'short') {
            return '60px'
        } else {
            return '0'
        }
    }
};

`

export const Constrainer = styled.div`
        display: block;
        margin: 0 auto;
        max-width: ${({widthAtSmall, widthAtMedium, widthAtLarge}) => {
        if(height == 'tall') {
            return '300px'
        } else if ( height == 'medium') {
            return '150px'
        } else if ( height == 'short') {
            return '60px'
        } else {
            return '0'
        }
    }
};

`