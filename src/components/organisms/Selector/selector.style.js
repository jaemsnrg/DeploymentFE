import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 20px;
  height: 120px;
  background: linear-gradient(rgb(245, 245, 245), rgb(255, 255, 255));
`;

export const ButtonWrapper = styled.div`
  position: relative;
  top: 10px;
  width: 80%;
  margin: 0 auto;
  & > button {
    font-size: 1.25rem;
  }
`;

export const LinkWrapper = styled.div`
  position: relative;
  top: 40px;
  height: 50px;
  width: 200px;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
`;
