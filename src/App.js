import { Routes, Route } from "react-router-dom";
import MainLayout from "layout/MainLayout/mainLayout";
import Home from "pages/Home/Home";
import Signin from "pages/Authi/Signin/signin";
import Signup from "pages/Authi/Signup/signup";
import ForgotPassword from "pages/Authi/ForgotPassword/forgotPassword";
import CreateAcct from "pages/Authi/CreateAcct/creatAcct";
import VerifyMail from "pages/Authi/VerifyMail/verifyMail";

function App() {
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/createAcct" element={<CreateAcct />} />
        <Route path="/verifyMail" element={<VerifyMail />} />
      </Routes>
    </>
  );
}

export default App;
