import classes from "./style.module.scss";

const Sidebar = () => {
  return (
    <div className={classes["steps"]}>
      <div className={classes["box-step"]}>
        <div className={classes["number-step"]}>1</div>
        <div className={classes["text-step"]}>
          <span>STEP 1</span>
          <p>YOUR INFO</p>
        </div>
      </div>
      <div className={classes["box-step"]}>
        <div className={classes["number-step"]}>2</div>
        <div className={classes["text-step"]}>
          <span>STEP 2</span>
          <p>SELECT PLAN</p>
        </div>
      </div>
      <div className={classes["box-step"]}>
        <div className={classes["number-step"]}>3</div>
        <div className={classes["text-step"]}>
          <span>STEP 3</span>
          <p>ADD-ONS</p>
        </div>
      </div>
      <div className={classes["box-step"]}>
        <div className={classes["number-step"]}>4</div>
        <div className={classes["text-step"]}>
          <span>STEP 4</span>
          <p>SUMMARY</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
