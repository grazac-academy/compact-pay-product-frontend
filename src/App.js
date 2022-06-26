import { Routes, Route } from "react-router-dom";
import MainLayout from "layout/MainLayout/mainLayout";
import Home from "pages/Home/Home";
import Signin from "pages/Authi/Signin/signin";
import Register from "pages/Authi/Register/register";
import ForgotPassword from "pages/Authi/ForgotPassword/forgotPassword";
import VerifyMail from "pages/Authi/VerifyMail/verifyMail";
import Modal from "layout/Modal/modal";
import "react-phone-number-input/style.css";
import CreateAcct from "pages/Authi/CreateAcct/creatAcct";
import DashboardLayout from "layout/DashboardLayout/DashboardLayout";
import Dashboard from "pages/DashboardPage/Dashboard/Dashboard";
import TransactionPage from "pages/DashboardPage/TransactionPage/TransactionPage";
import BeneficiaryPage from "pages/DashboardPage/BeneficiaryPage/BeneficiaryPage";
import Profile from "pages/DashboardPage/Profile/Profile";

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
<<<<<<< HEAD
        <Route path="/verify-email/:email" element={<VerifyMail />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/create-acct" element={<CreateAcct />} />
=======
        <Route path="/verifyMail" element={<VerifyMail />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/createAcct" element={<CreateAcct />} />
>>>>>>> main
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="transaction" element={<TransactionPage />} />
          <Route path="beneficiary" element={<BeneficiaryPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
