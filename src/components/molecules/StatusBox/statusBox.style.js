import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width: 80%;
    margin: 20px auto;
    text-align: center;
    height: 80px;
    background-color: rgb(245, 245, 245);
    border-radius: 5px; 
    overflow: hidden;
    -webkit-box-shadow: 6px 4px 29px -4px rgba(0,0,0,0.19);
    -moz-box-shadow: 6px 4px 29px -4px rgba(0,0,0,0.19);
    box-shadow: 6px 4px 29px -4px rgba(0,0,0,0.19);
`

export const StatusType = styled.div`
    position: absolute;
    display: inline-block;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: ${({ theme, status }) => theme.colours[status] };
    ${({ theme }) => theme.mq.atTablet`
        
    `};
`

export const StatusHeading = styled.div`
    ${({ theme }) => theme.text.t4}
    text-align: left;
    padding-left: 20px;
    margin-top: 10px;
    /* width: 80%;
    margin: 0 auto;
    text-align: center;
    height: 50px;
    background-color: lightskyblue; */
`

export const StatusText = styled.div`
    
color: ${({ theme }) => theme.colours.greyDark };
    margin: 0 auto;
    text-align: left;
    padding-left: 20px;
    margin-top: 10px;
`


export const IconWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 19px;
    color: ${({ theme }) => theme.colours.grey };
`


 
  