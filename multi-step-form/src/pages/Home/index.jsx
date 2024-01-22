import AddOns from "../../components/AddOns";
import Info from "../../components/Info";
import LastPage from "../../components/LastPage";
import Plan from "../../components/Plan";
import Sidebar from "../../components/Sidebar";
import Summary from "../../components/Summary";

import classes from "./style.module.scss";

const Home = () => {
  return (
    <div className={classes["container"]}>
      <Sidebar />
      <div className={classes["main-content"]}>
        <Info />
        {/* <Plan /> */}
        {/* <AddOns /> */}
        {/* <Summary /> */}
        {/* <LastPage /> */}
      </div>
    </div>
  );
};

export default Home;
