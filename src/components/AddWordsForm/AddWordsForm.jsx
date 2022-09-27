import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWords } from 'redux/wordsSlice';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import AddWordsFormStyled from './AddWordsForm.styled';

const AddWordsForm = () => {
  const words = useSelector(state => state.words);
  const [word, setWord] = useState('');
  const [transletedWord, setTransletedWord] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'word':
        setWord(e.currentTarget.value);
        break;
      case 'translatedWord':
        setTransletedWord(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setWord('');
    setTransletedWord('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (word === '' || transletedWord === '') {
      Notify.failure('Заповніть всі поля');
      return;
    }
    if (
      words.filter(
        item =>
          item.word.toLowerCase() === word.toLowerCase() ||
          item.transletedWord.toLowerCase() === transletedWord.toLowerCase()
      ).length > 0
    ) {
      Notify.warning('Таке слово вже є в словнику');
      return;
    }
    dispatch(
      addWords({ word: word, transletedWord: transletedWord, id: nanoid() })
    );
    resetForm();
    Notify.success('Додано до словника');
  };

  return (
    <AddWordsFormStyled>
      <h2>Тут ти можеш додати слова до словника</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Додай слово англійською</p>
          <input
            type="text"
            name="word"
            onChange={handleChange}
            value={word}
            pattern="^[a-zA-Z\s]+$"
            title="Введіть слово англійською"
          />
        </label>
        <label>
          <p>Додай переклад</p>
          <input
            type="text"
            name="translatedWord"
            onChange={handleChange}
            value={transletedWord}
            title="Введіть слово українською"
            pattern="[А-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]+$"
          />
        </label>
        <button type="submit">Додати слово</button>
      </form>
    </AddWordsFormStyled>
  );
};

export default AddWordsForm;
