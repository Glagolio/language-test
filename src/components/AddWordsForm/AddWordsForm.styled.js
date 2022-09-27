import styled from '@emotion/styled';

const AddWordsFormStyled = styled.div`
  & p {
    margin-bottom: 5px;
  }

  & input {
    outline: none;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px 5px;
    font-size: 14px;

    &:hover,
    &:focus-within {
      border-color: orangered;
    }
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
    &:hover,
    &:focus {
      background-color: orangered;
      color: white;
    }
  }
`;

export default AddWordsFormStyled;
