import { BrowserRouter as Router } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
// import { ScrollArea } from "@/components/ui/scroll-area"
function App() {  
  return (
    <>
      <Router>
        <Layout/>
      </Router>
    </>
  )
}

export default App
