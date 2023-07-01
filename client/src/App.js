import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Error from "./pages/Error";
import {BrowserRouter , Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
  
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/landing" element={<Landing/>}/>x
      <Route path="*" element={<Error/>}/>

      </Routes>
    </BrowserRouter>
  
    
  )
}

export default App;
