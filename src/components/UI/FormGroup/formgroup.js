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
    </div>
  );
};

export default FormGroup;
