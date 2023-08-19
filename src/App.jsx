import { Route, Routes } from "react-router-dom";
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
import Relations from "./Pages/Profile/Relations/relations";
import Bids from "./Pages/Profile/Bids/bids";
import RelationRoute from "./Layouts/Relation Route/RelationRoute";
import RecomendedRelation from "./Components/RelationsComponents/RecomendedRelation";
import LoginPage from "./Pages/Signupage/LoginPage";
import CreatePssPage from "./Pages/Signupage/CreatePssPage";
import ResetPssPage from "./Pages/Signupage/ResetPssPage";
import ForgotPassPage from "./Pages/Signupage/ForgotPassPage";
<<<<<<< HEAD
import { ErrorProvider } from "./Components/Error/ErrorContext";
=======
import SearchRoute from "./Layouts/Search/SearchRoute";
import SearchCompany from "./Components/Topbar/SearchAllCompo/SearchCompany";
import SearchProduct from "./Components/Topbar/SearchAllCompo/SearchProduct";
import SearchAll from "./Components/Topbar/SearchAllCompo/SearchAll";
>>>>>>> origin/Hawi
import RequestedRelation from "./Components/RelationsComponents/RequestedRelation";
import General from "./Components/SettingComponent/General";
import Second from "./Layouts/Secondary/Second";
import EditProfile from "./Components/SettingComponent/EditProfile";
import NotificationSetting from "./Components/SettingComponent/NotificationSetting"
import Help from "./Components/SettingComponent/Help";
import Contact from "./Components/SettingComponent/Contact";
import PrivacyPolicy from "./Components/SettingComponent/PrivacyPolicy"


function App() {
  return (
    <ErrorProvider>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
<<<<<<< HEAD
          <Route path="/createPass/:id" element={<CreatePssPage />} />
          <Route path="/ResetPss" element={<ResetPssPage />} />
          <Route path="/forget-password" element={<ForgotPassPage />} />
        </Route>
       
        <Route path="/feed" element={<Primary />}>
          <Route path="/feed" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/feed/notifications" element={<Notification />} />

            
          </Route>
        
          <Route path="/feed/settings" element={<Second />}>
              <Route index element={<General />} />
              <Route path="/feed/settings/edit" element={<EditProfile />} />
              <Route path="/feed/settings/NotificationSetting" element={<NotificationSetting />} />
              <Route path="/feed/settings/Help" element={<Help/>} />
              <Route path="/feed/settings/contact" element={<Contact />} />
              <Route path="/feed/settings/Privacy" element={<PrivacyPolicy />} />
            </Route>
          <Route path="/feed/profile/:id" element={<Profile />}>
            <Route index element={<About />} />
            <Route path="/feed/profile/:id/post" element={<Post />} />
            <Route path="/feed/profile/:id/demand-products" element={<DemandProducts />} />
            <Route path="/feed/profile/:id/relations" element={<Relations />} />
            <Route path="/feed/profile/:id/bids" element={<Bids />} />
=======
          <Route path="/createPass" element={<CreatePssPage />} />
          <Route path="/ResetPss" element={<ResetPssPage />} />
          <Route path="/ForgotPass" element={<ForgotPassPage />} />
        </Route>

        <Route path="/SearchNav" element={<SearchRoute />}>
          <Route path="/SearchNav/Company" element={<SearchCompany />} />
          {/* <Route path="/SearchNav/All" element={<SearchAll />} /> */}
          <Route path="/SearchNav/SearchProduct" element={<SearchProduct />} />
        </Route>

        <Route path="/" element={<Primary />}>
          <Route path="home" element={<Home />} />
          <Route path="/notifications" element={<Notification />} />
          {/* <Route path="/message" element={<Message />} />  */}
          <Route path="/settings" element={<Second />}>
            <Route path="/settings/general" element={<General />} />
            <Route path="/settings/edit" element={<EditProfile />} />
            <Route
              path="/settings/notification"
              element={<NotificationSetting />}
            />
            <Route path="/settings/Help" element={<Help />} />
            <Route path="/settings/contact" element={<Contact />} />
            <Route path="/settings/Privacy" element={<PrivacyPolicy />} />
          </Route>

          <Route path="/profile" element={<Profile />}>
            <Route index element={<About />} />
            <Route path="/profile/post" element={<Post />} />
            <Route
              path="/profile/demand-products"
              element={<DemandProducts />}
            />
            <Route path="/profile/relations" element={<Relations />} />
            <Route path="/profile/bids" element={<Bids />} />
>>>>>>> origin/Hawi
          </Route>

          <Route path="Relations" element={<RelationRoute />}>
            <Route path="Relations/relation" element={<Relations />} />
            <Route path="Relations/Recommended" element={<RecomendedRelation />} />
            <Route path="Relations/Requested" element={<RequestedRelation/>} />
          </Route>
        </Route>
      </Routes>
    </ErrorProvider>
  );
}

export default App;
