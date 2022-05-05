// import './App.css';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Home from './pages/Home/Home';

// function App() {
//   return (
//   <Router>
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />} exact />
//       </Routes>
//     </div>
//   </Router>
//   );
// };
import { Routes, Route } from 'react-router-dom';
// import './App.css';
import MainLayout from './layout/MainLayout/mainLayout';
import Home from './pages/Home/Home';
import Header from './components/UI/Header/Header2/header2';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
