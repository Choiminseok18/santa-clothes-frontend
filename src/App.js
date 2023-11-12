import { Route, Routes} from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import LoginPage from "./pages/Login/LoginPage";
import SantaShop from "./pages/Santashop/SantaShopPage";
import AddressForm from "./components/AddressInput";
import Layout from './components/Layout/Layout';
import WriteFindPage from "./pages/Find/WriteFindPage";
import WriteDonatePage from "./pages/Donate/WriteDonatePage";
import FindPostPage from './pages/Find/FindPostPage';
import React from "react";
import FindPage from "./pages/Find/FindPage";
import DonatePage from "./pages/Donate/DonatePage";
import DonatePostPage from "./pages/Donate/DonatePostPage";


const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route element={<MainPage />} path="/" exact={true} />
          <Route element={<LoginPage />} path="/login-page" />
          <Route element={<FindPage />} path="/find" />
          <Route element={<SantaShop />} path="/santa-shop" />
          <Route element={<DonatePage />} path="/donate" />
          <Route element={<AddressForm />} path="/address-input" />
          <Route element={<WriteDonatePage />} path="/donate-write" />
          <Route element={<WriteFindPage />} path="/find-write" />
          <Route element={<FindPostPage />} path="/find-viewer/:findPostId" />
          <Route element={<DonatePostPage />} path="/donate-viewer/:donatePostId" />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;