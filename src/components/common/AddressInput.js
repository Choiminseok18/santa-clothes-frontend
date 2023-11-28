import {useState, useEffect, useCallback} from "react";
import styled from "styled-components";
import Button from "./Button/Button";
import DeliveryModalContainer from "../../containers/donate/DeliveryModalContainer";




const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 21rem auto;
  width: 35rem;
  align-items: center;
`

const StyledInput = styled.input`
  width: 35rem;
  height: 4rem;
  border: 0.5px solid darkgrey;
  border-radius: 2.5px;
  font-size: 1.5rem;
  padding: 0.25rem 0 0.25rem 0.1rem;
  box-sizing: border-box;
`;

const StyledButton = styled(Button)`
  width: 33rem;
  height: 4rem;
  margin-top: 2rem;
  font-size: 1.5rem;
`


export default function AddressInput({onPublish, username, address, phoneNumber, handleChange, error}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(() => !isOpen);
    console.log(isOpen);
  }

  const onInsertInfo = useCallback(
    e => {
      if (username === "" && address === "" && phoneNumber === "") {
        alert("모든 정보를 입력해주세요.");
      } else {
        e.preventDefault();
        onPublish();
        alert("저장되었습니다.")
      }
    },
    [username, address, phoneNumber]
  )

  return (
    <StyledBox>
      <StyledInput
        type="text"
        placeholder="이름"
        name='username'
        value={username}
        onChange={handleChange}
      />
      <br />
      <StyledInput
        type="text"
        placeholder="주소"
        name='address'
        value={address}
        onChange={handleChange}
      />
      <br />
      <StyledInput
        type="text"
        placeholder="전화번호 ( - 없이 입력 )"
        name='phoneNumber'
        value={phoneNumber}
        onChange={handleChange}
      />

      <StyledButton onClick={(e) => {onInsertInfo(e); handleOpen();}}>정보 저장하기</StyledButton>
      {isOpen && <DeliveryModalContainer/>}

    </StyledBox>
  );
}
