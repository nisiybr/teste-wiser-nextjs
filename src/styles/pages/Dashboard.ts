import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import { shade } from 'polished';

const signInBackgroundImg =
  'https://s3-alpha-sig.figma.com/img/da71/def9/a4b7bbf328760a46b71373be48960a50?Expires=1614556800&Signature=goIwgoGJO77DWot3ATLvyedwIDVcDYewUTQftRZHGBpVQXAPuk1g7EkDqvh3l3cy3U8W-rgQqZIVedqQDfzVGZYdQ94CFsZQCqr~gruYK8w4RefoTmEPR5iuIEg6JKOM2mixaE4lpzV6oE0-3~csUlnDCdyTkMx3-5Nw0VdZVWBoj1Th7Z1p3T2XK~YE6o5W7GYzQmPu4JuCUuj3wnr84SrJXz717xFjkZYskGkGnl-Q9MrzNDTomHhYDf~7iEYQnidcdxf8gRiUmdsogJKUgUW7E98PDdydfhDcpoQ0Uwx-ExRyS1iMDRWlwVVERborRV9qerYaGdMQQC6C6FF57A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
`;
export const Content = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 256px;
  margin-left: 110px;
  margin-right: 240px;

  h1 {
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #383e71;
  }
  p {
    margin-top: 1.6rem;
    margin-bottom: 3.5rem;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #989fdb;
  }
  strong {
    margin-left: 1.2rem;
    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
    font-weight: normal;
    font-size: 10px;
    color: #383e71;
  }
  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #989fdb;
  }
`;
export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
`;

export const SpanWrapper = styled.div`
  margin-top: 3.2rem;

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
`;
