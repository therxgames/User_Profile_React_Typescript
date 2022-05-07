import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserListPage from './pages/UserListPage/UserListPage'
import ProfilePage from './pages/ProfilePage/UserProfilePage'
import './App.scss'

const App: React.FC = () => {

    return (
      <BrowserRouter>
          <Routes>
               <Route path="/" element={<UserListPage />} />
               <Route path="/:id" element={<ProfilePage />} />
          </Routes>
      </BrowserRouter>
    )
}

export default App;
