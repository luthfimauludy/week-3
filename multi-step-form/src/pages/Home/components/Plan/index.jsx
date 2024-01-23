import iconArcade from "../../../../assets/img/icon-arcade.svg";
import iconAdvanced from "../../../../assets/img/icon-advanced.svg";
import iconPro from "../../../../assets/img/icon-pro.svg";

import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import classes from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setOrder, setStep } from "../../action";
import { useState } from "react";

const SwitchIOS = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 0,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(22px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#02295a" : "#02295a",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#02295a",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#02295a" : "#02295a",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Plan = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.homeReducer.step);
  const currentOrder = useSelector((state) => state.homeReducer.order);

  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [chosenPackage, setChosenPackage] = useState();
  const [duration, setDuration] = useState("Monthly");

  const nextHandler = () => {
    onSubmit();
    dispatch(setStep(currentStep + 1));
  };

  const backHandler = () => {
    dispatch(setStep(currentStep - 1));
  };

  const clearState = () => {
    setType("");
    setPrice(0);
    setChosenPackage();
  };

  const arcadeMonthly = () => {
    clearState();
    setChosenPackage(1);
    setPrice(9);
    setType("Arcade");
  };

  const advancedMonthly = () => {
    clearState();
    setChosenPackage(2);
    setPrice(12);
    setType("Advanced");
  };

  const proMonthly = () => {
    clearState();
    setChosenPackage(3);
    setPrice(15);
    setType("Pro");
  };

  const arcadeYearly = () => {
    clearState();
    setChosenPackage(1);
    setPrice(90);
    setType("Arcade");
  };

  const advancedYearly = () => {
    clearState();
    setChosenPackage(2);
    setPrice(120);
    setType("Advanced");
  };

  const proYearly = () => {
    clearState();
    setChosenPackage(3);
    setPrice(150);
    setType("Pro");
  };

  const onSubmit = () => {
    dispatch(
      setOrder({
        ...currentOrder,
        type,
        price,
        duration,
      })
    );
  };

  return (
    <div className={classes["plan"]}>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className={classes["plans-card"]}>
        <div>
          <div
            onClick={arcadeMonthly}
            className={
              chosenPackage === 1 ? classes["card-selected"] : classes["card"]
            }
          >
            <img src={iconArcade} alt="Arcade" />
            <div className={classes["title"]}>
              <h3>Arcade</h3>
              <p>$9/mo</p>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={advancedMonthly}
            className={
              chosenPackage === 2 ? classes["card-selected"] : classes["card"]
            }
          >
            <img src={iconAdvanced} alt="Advanced" />
            <div className={classes["title"]}>
              <h3>Advanced</h3>
              <p>$12/mo</p>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={proMonthly}
            className={
              chosenPackage === 3 ? classes["card-selected"] : classes["card"]
            }
          >
            <img src={iconPro} alt="Pro" />
            <div className={classes["title"]}>
              <h3>Pro</h3>
              <p>$15/mo</p>
            </div>
          </div>
        </div>
      </div>
      <label className={classes["switch"]}>
        <span>Monthly</span>
        <FormControlLabel
          control={<SwitchIOS sx={{ m: 1 }} defaultChecked />}
        />
        <span>Yearly</span>
      </label>
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

export default Plan;
