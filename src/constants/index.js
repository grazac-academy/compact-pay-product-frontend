import Createaccount from "assets/Landing/creatAccount.svg";
import verifyAccount from "assets/Landing/verifyAccount.svg";
import sendMoney from "assets/Landing/sendMoney.svg";

import Image1 from "assets/Landing/swift.svg";
import Image2 from "assets/Landing/secure.svg";
import Image3 from "assets/Landing/money.svg";

import { checkMail, checkPassword } from "utils/regex";

// How it works
export const works = [
  {
    id: 1,
    img: Createaccount,
    title: "Create Account",
    content:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
  },
  {
    id: 2,
    img: verifyAccount,
    title: "Verify your account",
    content:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
  },
  {
    id: 3,
    img: sendMoney,
    title: "Start sending money 24/7",
    content:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
  },
];

// Why Choose Us Session
export const cardCont = [
  {
    image: Image1,
    title: "Swift Payment",
    content: "All transactions made are 95% ready in a minute",
  },

  {
    image: Image2,
    title: "Secured Payment",
    content: "We use high-secured technology to make sure your money is safe",
  },

  {
    image: Image3,
    title: "Low-Cost Fee",
    content: "Less than 0.3% charges on huge transactions ",
  },
];

export const inputArr = [
  {
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    name: "firstName",
    validator: (payload) => payload.firstName.length < 2,
    errorMessage: "Please enter your first name",
  },
  {
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    name: "lastName",
    validator: (payload) => payload.lastName.length > 2,
    errorMessage: "Please enter your last name",
  },
  {
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email address",
    name: "email",
    validator: (payload) => checkMail(payload.email),
    errorMessage: "Please enter a valid email",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Create a password",
    name: "password",
    validator: (payload) => !checkPassword(payload.password),
    errorMessage:
      "Password must have at least 8 character, 1 number & a special character",
  },
  {
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
    name: "confirmPassword",
    validator: (payload) => payload.password === payload.confirmPassword,
    errorMessage: "Passwords does not match",
  },
];



