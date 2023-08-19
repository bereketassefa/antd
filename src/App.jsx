import { Route, Routes } from "react-router-dom";
import "./App.css";
import Primary from "./Layouts/Primary/primary";
import Home from "./Pages/Home/home";
// import Message from './Pages/Message/message'
import Notification from './Pages/Notification/notification'
import PageLayout from './Layouts/Pages/page'
import Profile from './Pages/Profile/profile'
import About from './Pages/Profile/About/about'
import Post from './Pages/Profile/Post/post'
import DemandProducts from './Pages/Profile/DemandProducts/demandProducts'
import Relations from './Pages/Profile/Relations/relations'
import Bids from './Pages/Profile/Bids/bids'
import RelationRoute from "./Layouts/Relation Route/RelationRoute";
import RecomendedRelation from "./Components/RelationsComponents/RecomendedRelation";
import LoginPage from "./Pages/Signupage/LoginPage";
import CreatePssPage from "./Pages/Signupage/CreatePssPage";
import ResetPssPage from "./Pages/Signupage/ResetPssPage";
import ForgotPassPage from "./Pages/Signupage/ForgotPassPage";
import { ErrorProvider } from "./Components/Error/ErrorContext";
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
