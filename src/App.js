import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout/mainLayout';
import Home from 'pages/Home/Home';
import Header from 'components/UI/Header/Header2/header2';
import Footer from 'components/UI/Footer/Footer';
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
      <Footer />
    </>
  );
}

export default App;
