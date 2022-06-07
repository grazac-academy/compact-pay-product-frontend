<<<<<<< HEAD
import "./button.css";

const Button = ({ children, type, disabled, onClick }) => {
  return (
    <button
      className={"button"}
      type={type}
      onClick={onClick}
      disabled={disabled || false}
    >
      {children}
=======
import './button.css';

const Button = ({ children, type, isLoading, onClick }) => {
  return (
    <button className={'button'} type={type} onClick={onClick}>
      {isLoading ? 'Loading...' : children}
>>>>>>> main
    </button>
  );
};

export default Button;
