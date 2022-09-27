import { Container, Header, NavigationLink } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavigationLink to="/">Словник</NavigationLink>
          <NavigationLink to="add">Додати слова</NavigationLink>
          <NavigationLink to="test">Повторити слова</NavigationLink>
          <NavigationLink to="results">Результати</NavigationLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
