import { Route, Routes} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/auth/LoginPage";
import Layout from './components/layout/Layout';
import WriteFindPage from "./pages/find/WriteFindPage";
import WriteDonatePage from "./pages/donate/WriteDonatePage";
import FindPostViewerPage from './pages/find/FindPostViewerPage';
import React from "react";
import FindPage from "./pages/find/FindPage";
import DonatePage from "./pages/donate/DonatePage";
import DonatePostViewerPage from "./pages/donate/DonatePostViewerPage";
import SantaShopPage from "./pages/santashop/SantaShopPage";
import SantaShopViewerPage from "./pages/santashop/SantaShopViewerPage";
import {AuthContextProvider} from "./context/AuthContext";
import Oauth2RedirectHandler from "./lib/oauth/Oauth2RedirectHandeler";
import AddressInputPage from "./pages/donate/AddressInputPage";

const App = () => {
  return (
      <AuthContextProvider>
      <Layout>
        <Routes>
          <Route element={<MainPage />} path="/" exact={true} />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<Oauth2RedirectHandler />} path="/oauth/callback/kakao"/>

          <Route element={<SantaShopPage />} path="/santa-shop" />
          <Route element={<SantaShopViewerPage />} path="/santa-shop/:Id" />

          <Route element={<FindPage />} path="/find" />
          <Route element={<WriteFindPage />} path="/find/write" />
          <Route element={<FindPostViewerPage />} path="/find/:findPostId" />

          <Route element={<DonatePage />} path="/donate" />
          <Route element={<WriteDonatePage />} path="/donate/write" />
          <Route element={<DonatePostViewerPage />} path="/donate/:donatePostId" />
          <Route element={<AddressInputPage />} path="/donate/address-input" />
        </Routes>
      </Layout>
      </AuthContextProvider>
  );
};

export default App;