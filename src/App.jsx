import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import PorjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/portfolio/:project" element={<PorjectDetail/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route
          path="*"
          element={<Home/>}
        />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
