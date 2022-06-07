import Signup from "pages/Authi/Signup/signup";
import CreateAcct from "pages/Authi/CreateAcct/creatAcct";
import AuthLayout from "layout/Auth/Auth";
import { useState } from "react";
const Register = () => {
  const [payload, setPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    country: "Choose your country",
  });
  const [active, setActive] = useState(true);
  return (
    <AuthLayout
      title1="Lets help you make borderless Payment!"
      title2={active ? "Get Started" : "Create Account"}
      info={
        active
          ? "Get started here."
          : "Enter your details to create an account ,it’s free"
      }
    >
      {active ? (
        <Signup
          payload={payload}
          setPayload={setPayload}
          setActive={setActive}
        />
      ) : (
        <CreateAcct payload={payload} setPayload={setPayload} />
      )}
    </AuthLayout>
  );
};

export default Register;
