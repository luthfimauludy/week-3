import { useDispatch, useSelector } from "react-redux";
import classes from "./style.module.scss";
import { useState } from "react";
import { setOrder, setStep } from "../../action";

const Info = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.homeReducer.step);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = () => {
    dispatch(
      setOrder({
        name,
        email,
        phoneNumber,
      })
    );
  };

  const backHandler = () => {
    dispatch(setStep(currentStep - 1));
  };

  const nextHandler = () => {
    try {
      onSubmit();
      dispatch(setStep(currentStep + 1));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={classes["info"]}>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form className={classes["form"]}>
          <div className={classes["text-input"]}>
            <label>Name</label>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
            />
          </div>
          <div className={classes["text-input"]}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
            />
          </div>
          <div className={classes["text-input"]}>
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="e.g. +1 234 567 890"
              onChange={(e) => setPhoneNumber(e.target.value)}
              name="phoneNumber"
              id="phoneNumber"
            />
          </div>
        </form>
        {currentStep < 5 && (
          <div
            className={
              currentStep === 1 ? classes["btn-alternative"] : classes["btn"]
            }
          >
            {currentStep > 1 && (
              <button
                type="submit"
                className={classes["btn-back"]}
                onClick={backHandler}
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className={classes["btn-next"]}
              onClick={nextHandler}
            >
              {currentStep < 4 ? "Next Step" : "Confirm"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Info;
