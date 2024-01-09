import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import logoImg from "./SantaClothes.png"
import palette from "../../lib/styles/palette";
import {useEffect} from "react";

const SearchBar = styled.div`
  width: 230px;
  height: 40px;
  border-radius: 40px;
  background: #F6F6F6;
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
`;

const HeadBlock = styled.div`
  left: 0;
  top: 0;
  width: 100vw;
  height: 80px;
  background-color: #F8F8F8;
 ` ;

const Logo = styled.div`
  
`;

const Navigation = styled.nav`
  position: relative;
  display: flex;
  width: 100vw;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const Contents = styled.ul`
  display: flex;
  list-style: none;
  li {
    margin-left: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 23px;
    cursor: pointer;

    color: #717171;
    text-decoration: none;
  }
`

const Profile = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  border: 0.5px solid ${palette.gray[7]};
`

const onLoginClick = () => {
  window.location.href = 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=cbf0432b0c063d0d602795e63e5881f2&redirect_uri=http://172.17.116.96:3000/oauth/callback/kakao';
}

const onLogoutClick = () => {
  window.location.href = 'https://kauth.kakao.com/oauth/logout?client_id=cbf0432b0c063d0d602795e63e5881f2&logout_redirect_uri=http://172.17.116.96:3000';
  localStorage.removeItem('member');
}

const Header = () => {
  const navigate = useNavigate();
  const member = JSON.parse(localStorage.getItem('member'));


  return (
    <HeadBlock>
        <Navigation>
          <Logo style={{position: "absolute"}}><Link to="/"><img src={logoImg} alt="로고"/></Link></Logo>
          <Contents>
            <li style={{position: "absolute", left: "25%", top:"40%"}}><Link to="/donate" style={{textDecoration: "none", color: "#717171"}}>나눠줄래요</Link></li>

            <li style={{position: "absolute" ,left: "37%", top: "40%"}}><Link to="/find" style={{textDecoration: "none", color: "#717171"}}>찾아주세요</Link></li>

            <li style={{position: "absolute" ,left: "49%", top: "40%"}}><Link to="/santa-shop" style={{textDecoration: "none", color: "#717171"}}>산타샵</Link></li>

            <li style={{position: "absolute" ,left: "63%", top: "30%"}}><SearchBar><AiOutlineSearch style={{marginTop: 4,marginLeft:190, width:30,height:30}}></AiOutlineSearch></SearchBar></li>

            {!member && <li style={{position: "absolute" ,left: "87%" ,top:"40%"}} onClick={onLoginClick}>로그인/회원가입</li>}
            {member && <li style={{position: "absolute" ,left: "90%" ,top:"18%"}} onClick={onLogoutClick}><Profile src={`${member.profileImage}`} alt="프로필"/></li>}
          </Contents>
        </Navigation>
    </HeadBlock>
  )
}

export default Header;