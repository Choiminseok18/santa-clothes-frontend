import styled from "styled-components";
import Button from "./Button/Button";

export default function MyPage () {
  const Profile = styled.div`
  
  `
  const Points = styled.div`
  
  `

  const MyFindList = styled.div`
  
  `

  const MyDonateList = styled.div`

  `

  const DonatorInput = styled.input`
    
  `

  const handleClick = () => {

  }
    return (
        <>
            <div>
              <Profile>{profile}</Profile>
              <Points>{points}</Points>

              <DonatorInput />
              <Button onClick={handleClick}/>

              <hr/>
              <Toggle />
              {toggle && <MyFindList />}
              {!toggle && <MyDonateList />}
            </div>
        </>
    )
}