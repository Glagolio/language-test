import ResultStyled from './Results.styled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Results = () => {
  const results = useSelector(state => state.results);
  const [generalResult, serGeneralResult] = useState(0);

  useEffect(() => {
    const generalResult = Math.floor(
      results.reduce((acc, result) => acc + result.result, 0) / results.length
    );
    serGeneralResult(generalResult);
  }, [results]);

  return (
    <ResultStyled>
      {results.length > 0 ? (
        <>
          <h2>Твої результати</h2>
          <ul>
            {results.map((result, index) => (
              <li key={result.id}>
                <span>
                  Результат повторення №{index + 1} - {result.result}%
                </span>
              </li>
            ))}
          </ul>
          <h3>Загальна оцінка</h3>
          <span>{generalResult}%</span>
          {generalResult >= 50 ? (
            <p>Гарний результат. Продовжуй так само.</p>
          ) : (
            <p>Треба працювати більше. У тебе все вийде!</p>
          )}
        </>
      ) : (
        <h2>Результатів поки немає. Пройдіть хоча б одне повторення слів.</h2>
      )}
    </ResultStyled>
  );
};

export default Results;
