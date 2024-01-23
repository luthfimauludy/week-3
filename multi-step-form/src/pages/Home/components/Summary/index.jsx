import classes from "./style.module.scss";

const Summary = () => {
  return (
    <div className={classes["summary"]}>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className={classes["payout"]}>
        <div className={classes["box-title"]}>
          <div className={classes["title"]}>
            <h3>Arcade (Monthly)</h3>
            <p>Change</p>
          </div>
          <span>$9/mo</span>
        </div>
        <div className={classes["sub-title"]}>
          <div>
            <p>Online service</p>
            <p>Larger storage</p>
          </div>
          <div>
            <p>+$1/mo</p>
            <p>+$2/mo</p>
          </div>
        </div>
        <div className={classes["total"]}>
          <p>Total (per month)</p>
          <p className={classes["total-price"]}>+$12/mo</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
