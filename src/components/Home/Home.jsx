import { useSelector } from 'react-redux';
import HomeStyled from './Home.styled';

const Home = () => {
  const words = useSelector(state => state.words);
  return (
    <HomeStyled>
      <h1>Cловник</h1>
      {words.length === 0 ? (
        <p>Спочатку додай слова до словника</p>
      ) : (
        <ul>
          {words.map(item => (
            <li key={item.id}>
              <div>
                <p>{item.word} </p>
                <p>{item.transletedWord}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </HomeStyled>
  );
};

export default Home;
