import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Formulario from "./Views/Formulario"
import Home from "./Views/Home"
import NodFound from "./Views/NodFound"
function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/Contact' element={<Formulario />}/>
        <Route path='*' element={< NodFound />}/>
      </Routes>
    </>
  )
}

export default App
