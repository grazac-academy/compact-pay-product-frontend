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
    </button>
  );
};

export default Button;
