import styled from '@emotion/styled';

const HomeStyled = styled.div`
  & ul {
    list-style: none;
    padding-left: 0;
    gap: 24px;
    display: flex;
    flex-wrap: wrap;
  }

  & li {
    font-size: 22px;
    margin-bottom: 16px;
  }

  & p {
    margin: 0;
    font-size: 18px;

    &:last-child {
      font-size: 14px;
    }
  }
`;

export default HomeStyled;
