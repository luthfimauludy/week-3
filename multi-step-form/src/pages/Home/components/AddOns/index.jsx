import classes from "./style.module.scss";

const AddOns = () => {
  return (
    <div className={classes["add-ons"]}>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className={classes["pack"]}>
        <label className={classes["box-pack"]}>
          <div className={classes["checkbox"]}>
            <input type="checkbox" />
            <div className={classes["title"]}>
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <span className={classes["prices"]}>+1$/mo</span>
        </label>
      </div>
      <div className={classes["pack"]}>
        <label className={classes["box-pack"]}>
          <div className={classes["checkbox"]}>
            <input type="checkbox" />
            <div className={classes["title"]}>
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <span className={classes["prices"]}>+2$/mo</span>
        </label>
      </div>
      <div className={classes["pack"]}>
        <label className={classes["box-pack"]}>
          <div className={classes["checkbox"]}>
            <input type="checkbox" />
            <div className={classes["title"]}>
              <h3>Customizable Profile</h3>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <span className={classes["prices"]}>+2$/mo</span>
        </label>
      </div>
    </div>
  );
};

export default AddOns;
