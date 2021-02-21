import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import { shade } from 'polished';

const signInBackgroundImg =
  'https://s3-alpha-sig.figma.com/img/da71/def9/a4b7bbf328760a46b71373be48960a50?Expires=1614556800&Signature=goIwgoGJO77DWot3ATLvyedwIDVcDYewUTQftRZHGBpVQXAPuk1g7EkDqvh3l3cy3U8W-rgQqZIVedqQDfzVGZYdQ94CFsZQCqr~gruYK8w4RefoTmEPR5iuIEg6JKOM2mixaE4lpzV6oE0-3~csUlnDCdyTkMx3-5Nw0VdZVWBoj1Th7Z1p3T2XK~YE6o5W7GYzQmPu4JuCUuj3wnr84SrJXz717xFjkZYskGkGnl-Q9MrzNDTomHhYDf~7iEYQnidcdxf8gRiUmdsogJKUgUW7E98PDdydfhDcpoQ0Uwx-ExRyS1iMDRWlwVVERborRV9qerYaGdMQQC6C6FF57A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-image: linear-gradient(
        360deg,
        #130525 35%,
        rgba(105, 57, 153, 0) 100%
      ),
      url(${signInBackgroundImg});
    background-repeat: no-repeat, no-repeat;
    background-position: center, top;
    background-size: cover, 40em;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 25.6rem;
  margin-left: 11rem;
  margin-right: 24rem;
  @media (max-width: 600px) {
    justify-content: flex-start;
  }

  @media (max-width: 1000px) {
    margin-left: 8rem;
    margin-right: 8rem;
  }

  @media (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
    padding: 0 2.8rem;
    background-color: #faf5ff;
    min-width: 83%;
    height: 380px;
    border-radius: 0.8rem;
  }

  h1 {
    font-weight: 400;
    font-size: 4rem;
    line-height: 4.8rem;
    color: #383e71;
    @media (max-width: 600px) {
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-top: 2.4rem;
      width: 14rem;
      text-align: center;
    }
  }
  p {
    margin-top: 1.6rem;
    margin-bottom: 3.5rem;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #989fdb;
    @media (max-width: 600px) {
      font-size: 1.2rem;
      text-align: center;
      margin-bottom: 0.4rem;
    }
  }
  strong {
    margin-left: 1.2rem;
    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
    font-weight: normal;
    font-size: 1rem;
    color: #383e71;
  }
`;
export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
`;
export const Error = styled.h2`
  margin-top: 0.8rem;
  color: #ff377f;
  font-size: 1rem;
  margin-left: 1.4rem;

  @media (max-width: 600px) {
    min-width: 100%;
    min-height: 1.2rem;
  }
`;
export const SpanWrapper = styled.div`
  margin-top: 3.2rem;
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #989fdb;

    @media (max-width: 600px) {
      color: #ffffff;
      text-align: center;
      position: relative;
      bottom: -10px;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    color: #9d25b0;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#9D25B0')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background-image: linear-gradient(
      360deg,
      #130525 0%,
      rgba(105, 57, 153, 0) 100%
    ),
    url(${signInBackgroundImg});
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  background-size: cover, cover;

  @media (max-width: 600px) {
    display: none;
  }
`;
