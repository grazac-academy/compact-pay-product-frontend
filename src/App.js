import { Routes, Route } from "react-router-dom";
import MainLayout from "layout/MainLayout/mainLayout";
import Home from "pages/Home/Home";
import Signin from "pages/Authi/Signin/signin";
import Register from "pages/Authi/Register/register";
import ForgotPassword from "pages/Authi/ForgotPassword/forgotPassword";
import VerifyMail from "pages/Authi/VerifyMail/verifyMail";
import Modal from "layout/Modal/modal";
import "react-phone-number-input/style.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyMail" element={<VerifyMail />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </>
  );
};

export default App;
