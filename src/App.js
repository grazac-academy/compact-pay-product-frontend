import { Routes, Route } from "react-router-dom";
import MainLayout from "layout/MainLayout/mainLayout";
import Home from "pages/Home/Home";
import Signin from "pages/Authi/Signin/signin";
import Signup from "pages/Authi/Signup/signup";
import ForgotPassword from "pages/Authi/ForgotPassword/forgotPassword";
import CreateAcct from "pages/Authi/CreateAcct/creatAcct";
import VerifyMail from "pages/Authi/VerifyMail/verifyMail";
import DashboardLayout from "layout/DashboardLayout/DashboardLayout";
import Dashboard from "pages/DashboardPage/Dashboard/Dashboard";
import TransactionPage from "pages/DashboardPage/TransactionPage/TransactionPage";
import BeneficiaryPage from "pages/DashboardPage/BeneficiaryPage/BeneficiaryPage";
import Profile from "pages/DashboardPage/Profile/Profile";

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
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<Dashboard />}/>
          <Route path="transaction" element={<TransactionPage />}/>
          <Route path="beneficiary" element={<BeneficiaryPage />}/>
          <Route path="profile" element={<Profile />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
