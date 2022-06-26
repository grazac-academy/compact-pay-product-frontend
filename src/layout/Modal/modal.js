import style from "./modal.module.css";


const Modal = ({ title, info, img, children }) => {
  return (
    <div className={style.main_cont}>
      <div className={style.top_cont}>
        <div>{img}</div>
        <div>
          <h3>{title}</h3>
          <p>{info}</p>
        </div>
      </div>
      <div className={style.bottom_cont}>{children}</div>
    </div>
  );
};

export default Modal;
