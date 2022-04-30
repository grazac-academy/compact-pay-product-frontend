import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';


function App() {
  return (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
