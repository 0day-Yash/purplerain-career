import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { JobDetail } from './pages/JobDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:jobId" element={<JobDetail />} />
      </Routes>
    </Router>
  );
}

export default App;