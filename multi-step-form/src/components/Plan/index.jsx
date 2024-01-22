import iconArcade from "../../assets/img/icon-arcade.svg";
import iconAdvanced from "../../assets/img/icon-advanced.svg";
import iconPro from "../../assets/img/icon-pro.svg";

import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import classes from "./style.module.scss";

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
  return (
    <div className={classes["plan"]}>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className={classes["plans-card"]}>
        <div>
          <div className={classes["card"]}>
            <img src={iconArcade} alt="Arcade" />
            <div className={classes["title"]}>
              <h3>Arcade</h3>
              <p>$9/mo</p>
            </div>
          </div>
        </div>
        <div>
          <div className={classes["card"]}>
            <img src={iconAdvanced} alt="Arcade" />
            <div className={classes["title"]}>
              <h3>Arcade</h3>
              <p>$9/mo</p>
            </div>
          </div>
        </div>
        <div>
          <div className={classes["card"]}>
            <img src={iconPro} alt="Arcade" />
            <div className={classes["title"]}>
              <h3>Arcade</h3>
              <p>$9/mo</p>
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
    </div>
  );
};

export default Plan;
