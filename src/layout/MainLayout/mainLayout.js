import classes from "./mainLayout.module.css";
import Footer from "components/UI/Footer/Footer";
import Header from "components/UI/Header/Header2/header2";

const MainLayout = ({ children }) => {
  return (
    <div className={classes.main_cont}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
