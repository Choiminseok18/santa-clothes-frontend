import Header from './Header';
import Footer from './Footer';
import styled from "styled-components";

const Main = styled.main`
  min-height: calc(100vh - 28vh);
`

const Layout = (props) => {
  return (
    <div>
      <Header />

      <Main>
        {props.children}
      </Main>

      <Footer />
    </div>
  )
}

export default Layout;