import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Logo } from './styles';

const Header: React.FC = () => {
  function handleHome(): void {
    alert('Envia Home');
  }

  return (
    <Container>
      <Logo onClick={handleHome}>
        <FontAwesomeIcon icon={faFireAlt} size="4x" />
        <h1>DivideBrasa</h1>
      </Logo>
    </Container>
  );
};

export default Header;
