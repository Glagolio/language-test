import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addResult } from 'redux/resultsSlice';
import { Navigate } from 'react-router-dom';
import shuffle from 'lodash.shuffle';
import sampleSize from 'lodash.samplesize';
import { nanoid } from 'nanoid';
import RepetitorStyled from './Repetitor.styled';

const Repetitor = () => {
  const dispatch = useDispatch();
  const words = useSelector(state => state.words);
  const [randomWords, setRandomWords] = useState([]);
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState(0);

  useEffect(() => {
    let slicedShuffleWords = [];
    const shuffleWords = shuffle(words);
    if (shuffleWords.length > 10) {
      slicedShuffleWords = shuffleWords.slice(0, 10);
    } else {
      slicedShuffleWords = shuffleWords;
    }
    setRandomWords(slicedShuffleWords);
  }, [words]);

  useEffect(() => {
    const incorrectWords = [...randomWords];
    incorrectWords.splice(indexOfQuestion, 1);
    const incorrectAnswers = sampleSize(incorrectWords, 3);
    incorrectAnswers.push(randomWords[indexOfQuestion]);
    const allAnswers = shuffle(incorrectAnswers);
    setQuestions(allAnswers);
  }, [indexOfQuestion, randomWords]);

  useEffect(() => {
    if (randomWords.length === 0 || indexOfQuestion !== randomWords.length) {
      return;
    }
    const result = Math.floor((answers / randomWords.length) * 100);
    dispatch(addResult({ result, id: nanoid() }));
  }, [dispatch, answers, indexOfQuestion, randomWords]);

  const handleChoiceAnswer = id => {
    if (id === randomWords[indexOfQuestion].id) {
      setAnswers(prevState => prevState + 1);
    }

    setIndexOfQuestion(prevState => prevState + 1);
  };

  return (
    <RepetitorStyled>
      {randomWords.length > 3 && indexOfQuestion === randomWords.length && (
        <Navigate to="../results" />
      )}
      {randomWords.length > 3 && indexOfQuestion !== randomWords.length ? (
        <div>
          <h2>Обери вірний переклад</h2>
          <p>{randomWords[indexOfQuestion].word}</p>
          {questions.length === 4 && (
            <ul>
              {questions.map(({ id, transletedWord }) => (
                <li key={id}>
                  <button type="button" onClick={() => handleChoiceAnswer(id)}>
                    {transletedWord}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <h2>Щоб розпочати гру додайте в словник щонайменше 4 слова</h2>
      )}
    </RepetitorStyled>
  );
};

export default Repetitor;
