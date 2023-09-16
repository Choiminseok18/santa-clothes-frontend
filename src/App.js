import {Link, Route, Routes} from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import LoginPage from "./pages/Login/LoginPage";
import Request from "./pages/Find/FindPage";
import SantaShop from "./pages/Santashop/SantaShopPage";
import Share from "./pages/Donate/DonatePage";
import AddressForm from "./component/AddressInput";
import Layout from './pages/Layout/Layout';
import WritePage from "./pages/WritePage";


const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route element={<MainPage />} path="/" exact={true}/>
          <Route element={<LoginPage />} path="/LoginPage"/>
          <Route element={<Request />} path="/Request"/>
          <Route element={<SantaShop />} path="/SantaShop"/>
          <Route element={<Share />} path="/Share"/>
          <Route element={<AddressForm />} path="/AddressInput"/>
          <Route element={<WritePage />} path="/Write"></Route>
        </Routes>
      </Layout>

    </div>
  );
};

export default App;