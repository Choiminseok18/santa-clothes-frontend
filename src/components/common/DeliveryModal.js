import styled from "styled-components";
import Button from "./Button/Button";
import palette from "../../lib/styles/palette";
import {useState} from "react";
import Modal from "react-modal";
import {useNavigate} from "react-router-dom";
import SantaIcon from "./Santa-icon.png";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 35rem;
  align-items: center;
`

const StyledInput = styled.input`
  width: 35rem;
  height: 2.8em;
  border: 0.5px solid darkgrey;
  border-radius: 2.5px;
  font-size: 1.5rem;
  padding: 0.25rem 0 0.25rem 0.1rem;
  box-sizing: border-box;
`;

const StyledButton = styled(Button)`
  width: 33rem;
  height: 4rem;
  margin-top: 1.5rem;
  font-size: 1.5rem;
  background-color: ${palette.pink[1]};
  &:hover{
    background-color: ${palette.pink[2]};
  }
`

const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  margin: 25rem auto;
  width: 30rem;
  height: 30rem;
  border: 1px solid ${palette.gray[4]};
  border-radius: 1rem;
`

const PopUpButton = styled.button`
  margin: 4rem auto;
  border: none;
  width: 8rem;
  height: 3rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.6rem 1.5rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[7]};
  &:hover {
    background: ${palette.gray[6]};
  }
`

const SubmitMsg = styled.div`
  font-size: 2rem;
  margin-top: 3rem;
  font-weight: 1000;
`

const PointMsg = styled.div`
  font-size: 1.3rem;
  margin-top: 3rem;
  font-weight: 400;
  color: ${palette.gray[6]};
`

const Icon = styled.img`
  width: 8rem;
  height: 8rem;
  margin-Top: 3rem;
`

export default function DeliveryModal () {
  const [isPopUp, setIsPopUp] = useState(false);
  const navigate = useNavigate();
  const handlePopUp = () => {
    setIsPopUp(() => !isPopUp);
    console.log(isPopUp);
  }

    return (
        <>
          <StyledBox>
            <StyledInput
            type="text"
            placeholder="배송시 요청사항"
            name='phoneNumber'
            />
            <StyledButton onClick={handlePopUp}>신청하기</StyledButton>

            <StyledModal  isOpen={isPopUp} shouldCloseOnOverlayClick={false}>
              <SubmitMsg>신청이 완료 되었습니다!</SubmitMsg>
              <PointMsg>기부자님께 소정의 산타 포인트가 전달되었어요</PointMsg>
              <Icon src={SantaIcon}></Icon>
              <PopUpButton onClick={(e) => {handlePopUp(); navigate('/');}}>닫기</PopUpButton>
            </StyledModal>
          </StyledBox>
        </>
    )
}