import styled from "styled-components";
import ButtonPink from '../Button/ButtonPink';
import Button from '../Button/Button';


const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;
/* TagBox에서 사용하는 버튼과 일치하는 높이로 설정한 후 서로 간의 여백 지정 */
const StyledButtonPink = styled(ButtonPink)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;


const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButtonPink onClick={onPublish}>
        포스트 등록
      </StyledButtonPink>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;