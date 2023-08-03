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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Primary />}>
          <Route index element={<Home />} />
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
