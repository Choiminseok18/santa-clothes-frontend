import styled from "styled-components";
import {AiOutlineSearch, IconName} from "react-icons/ai";
import {Link} from "react-router-dom";
import logoImg from "./SantaClothes.png"

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
  width: 100%;
  height: 80px;
  background-color: #F8F8F8;
 ` ;

const Logo = styled.div`
  
`;

const Navigation = styled.nav`
  position: relative;
  display: flex;
  width: 96%;
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

    color: #717171;
    text-decoration: none;
  }
`



const Header = () => {
  return (
    <HeadBlock>
        <Navigation>
          <Logo style={{position: "absolute"}}><Link to="/"><img src={logoImg} alt="로고"/></Link></Logo>
          <Contents>
            <li style={{position: "absolute", left: "25%", top:"40%"}}><Link to="/Share" style={{textDecoration: "none", color: "#717171"}}>나눠줄래요</Link></li>

            <li style={{position: "absolute" ,left: "37%", top: "40%"}}><Link to="/Request" style={{textDecoration: "none", color: "#717171"}}>찾아주세요</Link></li>

            <li style={{position: "absolute" ,left: "49%", top: "40%"}}><Link to="/SantaShop" style={{textDecoration: "none", color: "#717171"}}>산타샵</Link></li>

            <li style={{position: "absolute" ,left: "63%", top: "30%"}}><SearchBar><AiOutlineSearch style={{marginTop: 4,marginLeft:190, width:30,height:30}}></AiOutlineSearch></SearchBar></li>

            <li style={{position: "absolute" ,left: "87%" ,top:"40%"}}><Link to="/LoginPage" style={{textDecoration: "none", color: "#717171"}}>로그인/회원가입</Link></li>
          </Contents>
        </Navigation>
    </HeadBlock>
  )
}

export default Header;