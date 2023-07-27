
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Primary from './Layouts/Primary/primary'
import Home from './Pages/Home/home'
// import Message from './Pages/Message/message'
import Notification from './Pages/Notification/notification'
import SignupLayout from './Layouts/SignupLayout/SignupLayout'
import ResetPass from './Components/SignUp/ResetPass'
import CreatePass from './Components/SignUp/CreatePass'
import Login from './Components/SignUp/Login'
import ForgotPass from './Components/SignUp/ForgotPass'
function App() {
  

  return (
    <>
      <Routes>
      <Route
          path="create-password/:token"
          element={<SignupLayout loginStatus={"create-password/:token"} />}
        />

        <Route
          path="login"
          element={<SignupLayout loginStatus={"login"} />}
        />
        <Route
          path="forget-password"
          element={<SignupLayout loginStatus={"forget-password"} />}
        />
        <Route
          path="reset-password/:token"
          element={<SignupLayout loginStatus={"reset-password/:token"} />}
        />

        <Route path='/' element={<Primary />}  >
            <Route index element={<Home />} />
            <Route path='/notifications' element={<Notification />}  />            
        </Route>
      </Routes>
    </>
  )
}

export default App
