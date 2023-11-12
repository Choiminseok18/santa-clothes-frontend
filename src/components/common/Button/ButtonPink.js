import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const StyledButtonPink = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  
  background: ${palette.pink[1]};
  &:hover {
    background: ${palette.pink[0]};
  }
`;

const ButtonPink = props => <StyledButtonPink {...props} />;

export default ButtonPink;