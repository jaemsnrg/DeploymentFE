import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => theme.text.bm}
  ${({ theme }) => theme.mq.atTablet`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 600px;
    width: 400px;
    -webkit-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.14);
    -moz-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.14);
    box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.14);
    `};

    & > span {
      display: block;

      background-color: white;
      height: 150px;
      width: 100%;
    }
`;

export const Title = styled.div`
  ${({ theme }) => theme.text.bxl}
  color: ${({ theme }) => theme.black };
  font-weight: bold;
  width: 80%;
  margin: 120px auto 0;
`;

export const SubTitle = styled.div`
  ${({ theme }) => theme.text.bl}
  color: ${({ theme }) => theme.colours.greyDark} };
  font-weight: bold;
  width: 80%;
  margin: 15px auto;
`;

export const DummyContent = styled.div`
  width: 80vw;
  height: 125vh;
  margin: 0 auto;
`;
