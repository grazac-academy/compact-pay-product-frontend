import createaccount from '../assets/Landing/creatAccount.svg';
import verifyAccount from '../assets/Landing/verifyAccount.svg';
import sendMoney from '../assets/Landing/sendMoney.svg';

import Image1 from "../assets/Landing/swift.svg";
import Image2 from "../assets/Landing/secure.svg";
import Image3 from "../assets/Landing/money.svg";

export const works = [
    {id: 1, img: createaccount, title: 'Create Account', content: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts"},
    {id: 2, img: verifyAccount, title: 'Verify your account', content: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts"},
    {id: 3, img: sendMoney, title: 'Start sending money 24/7', content: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts"},
]

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
