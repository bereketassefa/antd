import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
import NotificationSetting from "./Components/SettingComponent/NotificationSetting"
import Help from "./Components/SettingComponent/Help";
import Contact from "./Components/SettingComponent/Contact";
import PrivacyPolicy from "./Components/SettingComponent/PrivacyPolicy"
import { useCookies } from "react-cookie";
import SearchAll from "./Components/Topbar/SearchAllCompo/SearchAll";
// import Message from "./Pages/Message/Message";

function App() {
  const [cookies] = useCookies(['user']);
  return (
    <ErrorProvider>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="/create-password/:id" element={<CreatePssPage />} />
          <Route path="/ResetPss" element={<ResetPssPage />} />
          <Route path="/forget-password" element={<ForgotPassPage />} />
        </Route>

        
       
        <Route path="/feed" element={cookies.user ? <Primary /> : <Navigate to="/" />}>
          <Route path="/feed" element={<PageLayout />}>
             <Route path="/feed/Relations" element={<RelationRoute />}>
           
            <Route path="/feed/Relations/Recommended" element={<RecomendedRelation />} />
            <Route path="/feed/Relations/Requested" element={<RequestedRelation/>} />
            <Route path="/feed/Relations/relation" element={<Relations />} />
          </Route>
            <Route index element={<Home />} />
            <Route path="/feed/notifications" element={<Notification />} />
            {/* <Route path='/feed/messages' element={<Message/>} /> */}
            
          </Route>
          <Route path="/feed/SearchNav" element={<SearchRoute />}>
          <Route path="/feed/SearchNav/Company" element={<SearchCompany />} />
          <Route path="/feed/SearchNav/All" element={<SearchAll />} />
          {/* <Route path="/SearchNav/All" element={<SearchAll />} /> */}
          <Route path="/feed/SearchNav/SearchProduct" element={<SearchProduct />} />
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
          </Route>

         
        </Route>
      </Routes>
    </ErrorProvider>
  );
}

export default App;
