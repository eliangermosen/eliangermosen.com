import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    // <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route
        path="*"
        element={<Home/>}
      />
    </Routes>
    // <Footer/>
  )
}

export default App
