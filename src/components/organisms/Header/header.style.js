import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 20;
  width: 100%;
  background-color: white;
  /* height: 60px; */
  padding-top: 25px;
  padding-bottom: 25px;
  -webkit-box-shadow: 1px 4px 18px 5px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 1px 4px 18px 5px rgba(0, 0, 0, 0.07);
  box-shadow: 1px 4px 18px 5px rgba(0, 0, 0, 0.07);
  & > div {
    width: 70%;
    position: relative;
    left: 20px;
    top: 0px;
  }
`;
