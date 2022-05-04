import { Routes, Route } from "react-router-dom";
// import './App.css';
import MainLayout from "./layout/MainLayout/mainLayout";
import Home from "./pages/Home/home";

function App() {
  return (
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
  );
}

export default App;
