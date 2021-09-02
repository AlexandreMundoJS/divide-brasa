import styled from 'styled-components';
import theme from '../../styles/theme';


export const LogoutButton = styled.button`
  background-color: ${theme.logoutButton};
  border: none;
  padding: 12px 26px;
  border-radius: 4px;
  font-weight: bold;
  color: ${theme.white};
  svg {
    margin-right: 8px;
  }
`;
