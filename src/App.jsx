
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Primary from './Layouts/Primary/primary'
import Home from './Pages/Home/home'
// import Message from './Pages/Message/message'
import Notification from './Pages/Notification/notification'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Primary />}  >
            <Route index element={<Home />} />

            <Route path='/notifications' element={<Notification />}  />
            {/* <Route path='/messages' element={<Message />} /> */}

            
        </Route>
      </Routes>
    </>
  )
}

export default App
