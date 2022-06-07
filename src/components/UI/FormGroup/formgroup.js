<<<<<<< HEAD
import styles from "./formgroup.module.css";
import { useState } from "react";

const FormGroup = ({ label, isValid, errorMessage, onChange, ...props }) => {
  const [valid, setValid] = useState(true);
  const handleBlur = () => {
    if (!isValid) setValid(false);
  };
  return (
    <div className={styles.form_group}>
      <label className={styles.form_label}>{label}</label>
      <input
        onFocus={() => setValid(true)}
        className={`${styles.form_input} ${!valid && styles.error}`}
        onChange={(e) => onChange(e)}
        onBlur={handleBlur}
        {...props}
      />
      {!valid && <p>{errorMessage}</p>}
=======
import "./formgroup.css";

const FormGroup = ({ label, errorMessage, ...props }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input {...props} className="form-input" />
      <p>{errorMessage}</p>
>>>>>>> main
    </div>
  );
};

export default FormGroup;
