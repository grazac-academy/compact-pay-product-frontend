import "./formgroup.css";

const FormGroup = ({ label, errorMessage, ...props }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input {...props} className="form-input" />
      <p>{errorMessage}</p>
    </div>
  );
};

export default FormGroup;
