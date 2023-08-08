
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Primary from './Layouts/Primary/primary'
import Home from './Pages/Home/home'
// import Message from './Pages/Message/message'
import Notification from './Pages/Notification/notification'
import PageLayout from './Layouts/Pages/page'
import Profile from './Pages/Profile/profile'
import About from './Pages/Profile/About/about'
import Post from './Pages/Profile/Post/post'
import DemandProducts from './Pages/Profile/DemandProducts/demandProducts'
import Relations from './Pages/Profile/Relations/relations'
import Bids from './Pages/Profile/Bids/bids'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Primary />}  >
          <Route path='/' element={<PageLayout />} >
            <Route index element={<Home />} />

            <Route path='/notifications' element={<Notification />}  />

            {/* <Route path='/messages' element={<Message />} /> */}
          </Route>

          <Route path='/profile' element={<Profile/>} >
              <Route index element={<About />}  />
              <Route path='/profile/post' element={<Post />} />
              <Route path='/profile/demand-products' element={<DemandProducts/>} />
              <Route path='/profile/relations' element={<Relations />} />
              <Route path='/profile/bids' element={<Bids />} />
          </Route>
            

            
        </Route>
      </Routes>
    </>
  )
}

export default App
