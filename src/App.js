import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import Cancel from './pages/Cancel'
import Success from './pages/Success'
import Store from './pages/Store'
import CardProvider from './CardContext'

function App() {
  return (
    <CardProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CardProvider>
  )
}

export default App
