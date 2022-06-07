import './button.css';

const Button = ({ children, type, isLoading, onClick }) => {
  return (
    <button className={'button'} type={type} onClick={onClick}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
