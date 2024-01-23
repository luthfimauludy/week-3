import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setOrder, setStep } from "../../action";

import classes from "./style.module.scss";

const AddOns = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.homeReducer.step);
  const currentOrder = useSelector((state) => state.homeReducer.order);

  const [addOn, setAddOn] = useState([]);

  const nextHandler = () => {
    onSubmit();
    dispatch(setStep(currentStep + 1));
  };

  const backHandler = () => {
    dispatch(setStep(currentStep - 1));
  };

  const firstAddOn = (e) => {
    const isChecked = e.target.checked;
    const addOn = {
      addOn: "Online Service",
      addOnPrice: 1,
    };
    if (isChecked) {
      setAddOn((prevAddOns) => [...prevAddOns, addOn]);
    } else {
      setAddOn((prevAddOns) =>
        prevAddOns.filter((item) => item.addOn !== addOn.addOn)
      );
    }
  };

  const secondAddOn = (e) => {
    const isChecked = e.target.checked;
    const addOn = {
      addOn: "Larger Storage",
      addOnPrice: 2,
    };
    if (isChecked) {
      setAddOn((prevAddOns) => [...prevAddOns, addOn]);
    } else {
      setAddOn((prevAddOns) =>
        prevAddOns.filter((item) => item.addOn !== addOn.addOn)
      );
    }
  };

  const thirdAddOn = (e) => {
    const isChecked = e.target.checked;
    const addOn = {
      addOn: "Customizable Profile",
      addOnPrice: 2,
    };
    if (isChecked) {
      setAddOn((prevAddOns) => [...prevAddOns, addOn]);
    } else {
      setAddOn((prevAddOns) =>
        prevAddOns.filter((item) => item.addOn !== addOn.addOn)
      );
    }
  };

  console.log(currentOrder);
  const onSubmit = () => {
    dispatch(
      setOrder({
        ...currentOrder,
        addOn,
      })
    );
  };

  return (
    <div className={classes["add-ons"]}>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className={classes["pack"]}>
        <label className={classes["box-pack"]}>
          <div className={classes["checkbox"]}>
            <input
              type="checkbox"
              name="online"
              id="online"
              onChange={(e) => firstAddOn(e)}
            />
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
            <input
              type="checkbox"
              name="storage"
              id="storage"
              onChange={(e) => secondAddOn(e)}
            />
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
            <input
              type="checkbox"
              name="custom"
              id="custom"
              onChange={(e) => thirdAddOn(e)}
            />
            <div className={classes["title"]}>
              <h3>Customizable Profile</h3>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <span className={classes["prices"]}>+2$/mo</span>
        </label>
      </div>
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
  );
};

export default AddOns;
