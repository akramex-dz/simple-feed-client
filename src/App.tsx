import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from "./pages/login.page"
import SignupPage from "./pages/signup.page"
import { Layout} from "./components/Layout/Layout"

function App() {  
  return (
    <>
    < BrowserRouter>
      <Routes>
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/inscription" element={<SignupPage />} />
          <Route path="*" element={<h1>404</h1>} />
      </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
