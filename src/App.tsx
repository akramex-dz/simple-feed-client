import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import LoginPage from "./pages/login.page"
import SignupPage from "./pages/signup.page"
import HomePage from "./pages/home.page"
import UserSearch from "./pages/userSearch.page"


function PrivateRoute({ children, ...rest }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/connexion" />;
}

function App() {  
  return (
    <>
    < BrowserRouter>
      <Routes>
          <Route path="/" element={ 
            <PrivateRoute>
              <HomePage/>
            </PrivateRoute>
            } />
          <Route path="/recherche" element={ 
            <PrivateRoute>
              <UserSearch/>
            </PrivateRoute>
            } />
          <Route path="/connexion" element={ <LoginPage/> } />
          <Route path="/inscription" element={ <SignupPage/> } />
          <Route path="*" element={<h1>404</h1>} />
      </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
