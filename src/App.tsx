import { Route, Routes } from 'react-router-dom'
import Home from './Home/home'
import Works from './Works/works'
import Lab from './Lab/lab'
import Publications from './Publications/publications'
import Events from './Events/events'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/lab" element={<Lab />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  )
}

export default App
