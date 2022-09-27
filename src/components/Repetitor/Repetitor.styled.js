import styled from '@emotion/styled';

const RepetitorStyled = styled.div`
  & p {
    font-size: 24px;
  }

  & ul {
    list-style: none;
    padding-left: 0;

    display: flex;
  }

  & li {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  & p {
    margin-bottom: 0;
  }

  & button {
    margin-top: 16px;
    display: block;

    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 250ms linear, color 250ms linear;
    &:not(:last-child) {
      margin-right: 5px;
    }
    &:hover {
      background-color: orangered;
      color: white;
    }
  }
`;

export default RepetitorStyled;
