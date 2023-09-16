import styled from "styled-components";
import {color} from "quill/ui/icons";

const Foot = styled.div`
  height: 100px;
  margin-top: auto;
  background-color: #3A3A3A;
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
        <div>Santa-clothes</div>
      </Information>
    </Foot>
  )
}

export default Footer;