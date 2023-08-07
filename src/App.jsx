import { Route, Routes } from "react-router-dom";
import "./App.css";
import Primary from "./Layouts/Primary/primary";
import Home from "./Pages/Home/home";
// import Message from './Pages/Message/message'
import NotificationSetting from "./Components/SettingComponent/NotificationSetting";
import Second from "./Layouts/Secondary/Second";
import General from "./Components/SettingComponent/General";
import EditProfile from "./Components/SettingComponent/EditProfile";
import Help from "./Components/SettingComponent/Help";
import Contact from "./Components/SettingComponent/Contact";
import PrivacyPolicy from "./Components/SettingComponent/PrivacyPolicy";
import Notification from "./Pages/Notification/notification";
import RelationRoute from "./Layouts/Relation Route/RelationRoute";
import Relations from "./Components/RelationsComponents/Relations";
import RequestedRelation from "./Components/RelationsComponents/RequestedRelation";
import RecomendedRelation from "./Components/RelationsComponents/RecomendedRelation";
import LoginPage from "./Pages/Signupage/LoginPage";
import CreatePssPage from "./Pages/Signupage/CreatePssPage";
import ResetPssPage from "./Pages/Signupage/ResetPssPage";
import ForgotPassPage from "./Pages/Signupage/ForgotPassPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" >
          <Route index element={<LoginPage />}/>
          <Route path="/createPass" element={<CreatePssPage />} />
          <Route path="/ResetPss" element={<ResetPssPage />} />
          <Route path="/ForgotPass" element={<ForgotPassPage />} />
        </Route>

        <Route path="/" element={<Primary />}>
          <Route path="home" element={<Home />} />
          <Route path="/notifications" element={<Notification />} />
          {/* <Route path="/message" element={<Message />} />  */}
          <Route path="/settings" element={<Second />}>
            <Route path="/settings/general" element={<General />} />
            <Route path="/settings/edit" element={<EditProfile />} />
            <Route
              path="/settings/NotificationSetting"
              element={<NotificationSetting />}
            />
            <Route path="/settings/Help" element={<Help />} />
            <Route path="/settings/contact" element={<Contact />} />
            <Route path="/settings/Privacy" element={<PrivacyPolicy />} />
          </Route>

          <Route path="/Relations" element={<RelationRoute />}>
            <Route path="/Relations/relation" element={<Relations />} />
            <Route
              path="/Relations/Recommended"
              element={<RecomendedRelation />}
            />
            <Route
              path="/Relations/Requested"
              element={<RequestedRelation />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
