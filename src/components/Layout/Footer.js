import styled from "styled-components";

const Foot = styled.div`
  height: 15vh;
  width: 100vw;
  margin-top: auto;
  background-color: #212529;
`;

const Information = styled.div`
  width: 96%;
  max-width: 1100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <Foot>
      <Information>
        <div></div>
      </Information>
    </Foot>
  )
}

export default Footer;