import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhotos";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/nasaphoto" element={<NasaPhoto/>}/>
      </Routes>
    </div>
      
    </BrowserRouter>
  )
}

export default App
