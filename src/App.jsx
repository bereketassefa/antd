import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Primary from "./Layouts/Primary/primary";
import Home from "./Pages/Home/home";
// import Message from './Pages/Message/message'
import Notification from "./Pages/Notification/notification";
import PageLayout from "./Layouts/Pages/page";
import Profile from "./Pages/Profile/profile";
import About from "./Pages/Profile/About/about";
import Post from "./Pages/Profile/Post/post";
import DemandProducts from "./Pages/Profile/DemandProducts/demandProducts";
import Relations from "./Components/RelationsComponents/Relations";
import Bids from "./Pages/Profile/Bids/bids";
import RelationRoute from "./Layouts/Relation Route/RelationRoute";
import RecomendedRelation from "./Components/RelationsComponents/RecomendedRelation";
import LoginPage from "./Pages/Signupage/LoginPage";
import CreatePssPage from "./Pages/Signupage/CreatePssPage";
import ResetPssPage from "./Pages/Signupage/ResetPssPage";
import ForgotPassPage from "./Pages/Signupage/ForgotPassPage";
import { ErrorProvider } from "./Components/Error/ErrorContext";
import SearchRoute from "./Layouts/Search/SearchRoute";
import SearchCompany from "./Components/Topbar/SearchAllCompo/SearchCompany";
import SearchProduct from "./Components/Topbar/SearchAllCompo/SearchProduct";
import RequestedRelation from "./Components/RelationsComponents/RequestedRelation";
import General from "./Components/SettingComponent/General";
import Second from "./Layouts/Secondary/Second";
import EditProfile from "./Components/SettingComponent/EditProfile";
import NotificationSetting from "./Components/SettingComponent/NotificationSetting";
import Help from "./Components/SettingComponent/Help";
import Contact from "./Components/SettingComponent/Contact";
import PrivacyPolicy from "./Components/SettingComponent/PrivacyPolicy";
import { useCookies } from "react-cookie";
import SearchAll from "./Components/Topbar/SearchAllCompo/SearchAll";
import { ToastProvider } from "./Components/Toast/toastContext";
import ChatPage from "./Components/Chat/ChatPage";
import OTPpage from "./Pages/Signupage/OTPpage";
import AddItemsPage from "./Pages/AddProduct/AddItemsPage";

// import Message from "./Pages/Message/Message";

//////// Public imports//////

import Layout from "../src/Layouts/PublicLayout/Layout";
import PublicHome from "../src/Pages/PublicPage/PublicHome";

import Service from "../src/Pages/PublicPage/Service";
import posHero from "../src/assets/PuplicImage/M-pos webbb.png";

import erpHero from "../src/assets/PuplicImage/ERP-image.png";

import invoiceimage from "../src/assets/PuplicImage/Addis e-invoice-01.png";

import businessinteligence from "../src/assets/PuplicImage/business inteligent.png";

import AboutPublic from "./Pages/PublicPage/AboutPublic";

import Blog from "../src/Pages/PublicPage/Blog";
import ContactPublic from "./Pages/PublicPage/ContactPublic";

import UserGuide from "../src/Pages/PublicPage/UserGuide";

import Faq from "../src/Pages/PublicPage/Faq";

import HelpPublic from "./Pages/PublicPage/HelpPublic";

import DemoRequest from "../src/Pages/PublicPage/DemoRequest";

import Submitted from "../src/Pages/PublicPage/Submitted";

import PageNotFound from "../src/Pages/PublicPage/PageNotFound";

import { features } from "../src/PublicData/data";

import Aos from "aos";
import JobApply from "../src/Pages/PublicPage/JobApply";

import Vacancy from "../src/Pages/PublicPage/Vacancy";
import ForTesting from "../src/ForTesting";
import SearchRoutePublic from "./Layouts/PublicLayout/PublicSearch/SearchRoutePublic";
import SearchAllPublic from "./Components/PublicComponents/NavComponenet/SearchPublicCompo/SearchAllPublic";
import SearchCompanyPublic from "./Components/PublicComponents/NavComponenet/SearchPublicCompo/SearchCompanyPublic";
import SearchProductPublic from "./Components/PublicComponents/NavComponenet/SearchPublicCompo/SearchProductPublic";
import Job from "./Components/PublicComponents/NavComponenet/SearchPublicCompo/Job";
import PostPublic from "./Components/PublicComponents/NavComponenet/SearchPublicCompo/PostPublic";

import BlogNews from "../src/Components/PublicComponents/BlogNews";
////////////

function App() {
  const [cookies] = useCookies(["user"]);
  // Public Route
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <ErrorProvider>
      <ToastProvider>
        <Routes>
          {/* Public Route */}

          <Route path="/" element={<Layout />}>
            <Route index element={<PublicHome />} />
            <Route
              path="pos-service"
              element={
                <Service
                  heading={"POS service"}
                  title={"pos-title"}
                  paragraph={"POS-system-para"}
                  featureData1={features.posFeature.feature}
                  bannerImage={posHero}
                />
              }
            />

            <Route
              path="erp-service"
              element={
                <Service
                  heading={"ERP as a Service"}
                  title={"ERP-title"}
                  paragraph={"ERP-para"}
                  featureData1={features.posFeature.feature}
                  bannerImage={erpHero}
                />
              }
            />

            <Route
              path="electronic-invoice"
              element={
                <Service
                  heading={"Electronic Invoice"}
                  title={"electronic-title"}
                  paragraph={"electronic-para"}
                  featureData1={features.electronicInvoice.feature}
                  bannerImage={invoiceimage}
                />
              }
            />

            <Route
              path="business-intelligence"
              element={
                <Service
                  heading={"Business Intelligence"}
                  title={"Business I title"}
                  paragraph={"Business I para1"}
                  featureData1={
                    features.businessIntelligence.featureToBusinessCommunity
                  }
                  featureData2={features.businessIntelligence.featureToAuthor}
                  bannerImage={businessinteligence}
                />
              }
            />

            <Route // M-POSS
              path="m-pos"
              element={
                <Service
                  heading={"Mpos head"}
                  title={"m-poss title"}
                  paragraph={"M-pos para1"}
                  featureData1={features.mpos.benefitOfMPOS}
                  featureData2={features.mpos.benefitToManagement}
                  bannerImage={businessinteligence}
                />
              }
            />
            <Route path="about-us" element={<AboutPublic />} />
            <Route path="blog" element={<Blog />} />
            <Route path="/blog/blognews" element={<BlogNews />} />

            <Route path="contact" element={<ContactPublic />} />
            <Route path="user-guide" element={<UserGuide />} />
            <Route path="faq" element={<Faq />} />
            <Route path="help" element={<HelpPublic />} />
            <Route path="demo-request" element={<DemoRequest />} />
            <Route path="demo-request/submitted" element={<Submitted />} />
            <Route path="vacancy" element={<Vacancy />} />
            <Route
              path="vacancy-apply/:id/:jobposition"
              element={<JobApply />}
            />
            <Route path="/odootest" element={<ForTesting />} />
            <Route path="*" element={<PageNotFound />} />

            <Route path="Search" element={<SearchRoutePublic />}>
              <Route
                path="/Search/All/:searchInput"
                element={<SearchAllPublic />}
              />
              <Route
                path="/Search/:searchInput/companies"
                element={<SearchCompanyPublic />}
              />
              <Route
                path="/Search/:searchInput/Product"
                element={<SearchProductPublic />}
              />
              <Route path="/Search/:searchInput/Job" element={<Job />} />
              <Route
                path="/Search/:searchInput/Post"
                element={<PostPublic />}
              />
            </Route>
          </Route>

          {/* Landing Route */}

          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-password/:id" element={<CreatePssPage />} />
          <Route path="/ResetPss/:token" element={<ResetPssPage />} />
          <Route path="/forget-password" element={<ForgotPassPage />} />
          <Route path="/OTP" element={<OTPpage />} />

          <Route
            path="/feed"
            element={cookies.user ? <Primary /> : <Navigate to="/" />}
          >
            <Route path="/feed" element={<PageLayout />}>
              <Route path="/feed/Relations" element={<RelationRoute />}>
                <Route
                  path="/feed/Relations/Recommended"
                  element={<RecomendedRelation />}
                />
                <Route
                  path="/feed/Relations/Requested"
                  element={<RequestedRelation />}
                />
                <Route
                  path="/feed/Relations/relation"
                  element={<Relations />}
                />
              </Route>
              <Route index element={<Home />} />
              <Route path="/feed/notifications" element={<Notification />} />
              <Route path="/feed/messages" element={<ChatPage />} />
              <Route path="/feed/products" element={<AddItemsPage />} />
            </Route>
            <Route path="/feed/SearchNav/:name" element={<SearchRoute />}>
              <Route
                path="/feed/SearchNav/:name/party"
                element={<SearchCompany />}
              />
              <Route path="/feed/SearchNav/:name" element={<SearchAll />} />

              <Route
                path="/feed/SearchNav/:name/Product"
                element={<SearchProduct />}
              />
            </Route>

            <Route path="/feed/settings" element={<Second />}>
              <Route index element={<General />} />
              <Route path="/feed/settings/edit" element={<EditProfile />} />
              <Route
                path="/feed/settings/NotificationSetting"
                element={<NotificationSetting />}
              />
              <Route path="/feed/settings/Help" element={<Help />} />
              <Route path="/feed/settings/contact" element={<Contact />} />
              <Route
                path="/feed/settings/Privacy"
                element={<PrivacyPolicy />}
              />
            </Route>
            <Route path="/feed/profile/:id" element={<Profile />}>
              <Route index element={<About />} />
              <Route path="/feed/profile/:id/post" element={<Post />} />
              <Route
                path="/feed/profile/:id/demand-products"
                element={<DemandProducts />}
              />
              <Route
                path="/feed/profile/:id/relations"
                element={<Relations />}
              />
              <Route path="/feed/profile/:id/bids" element={<Bids />} />
            </Route>
          </Route>
        </Routes>
      </ToastProvider>
    </ErrorProvider>
  );
}

export default App;
