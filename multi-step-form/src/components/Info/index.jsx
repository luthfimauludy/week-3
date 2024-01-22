import classes from "./style.module.scss";

const Info = () => {
  return (
    <div className={classes["info"]}>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form className={classes["form"]}>
        <div className={classes["text-input"]}>
          <label>Name</label>
          <input type="text" placeholder="e.g. Stephen King" />
        </div>
        <div className={classes["text-input"]}>
          <label>Email Address</label>
          <input type="email" placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div className={classes["text-input"]}>
          <label>Phone Number</label>
          <input type="text" placeholder="e.g. +1 234 567 890" />
        </div>
        <div className={classes["btn"]}>
          <button type="submit">Next Step</button>
        </div>
      </form>
    </div>
  );
};

export default Info;
