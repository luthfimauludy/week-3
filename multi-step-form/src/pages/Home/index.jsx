import { useDispatch, useSelector } from "react-redux";

import { setStep } from "./action";

import AddOns from "./components/AddOns";
import Info from "./components/Info";
import LastPage from "./components/LastPage";
import Plan from "./components/Plan";
import Summary from "./components/Summary";

import classes from "./style.module.scss";

const Home = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.homeReducer.step);

  console.log(currentStep, "Current Step");

  const stepHanlder = () => {
    if (currentStep === 5) {
      dispatch(setStep(1));
    } else {
      dispatch(setStep(currentStep + 1));
    }
  };

  const renderComponent = () => {
    switch (currentStep) {
      case 1:
        return <Info />;
      case 2:
        return <Plan />;
      case 3:
        return <AddOns />;
      case 4:
        return <Summary />;
      case 5:
        return <LastPage />;
      default:
        return <Info />;
        break;
    }
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["steps"]}>
        <div className={classes["box-step"]}>
          <div
            className={
              classes["number-step"] +
              " " +
              (currentStep === 1 ? classes["active"] : "")
            }
          >
            1
          </div>
          <div className={classes["text-step"]}>
            <span>STEP 1</span>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className={classes["box-step"]}>
          <div
            className={
              classes["number-step"] +
              " " +
              (currentStep === 2 ? classes["active"] : "")
            }
          >
            2
          </div>
          <div className={classes["text-step"]}>
            <span>STEP 2</span>
            <p>SELECT PLAN</p>
          </div>
        </div>
        <div className={classes["box-step"]}>
          <div
            className={
              classes["number-step"] +
              " " +
              (currentStep === 3 ? classes["active"] : "")
            }
          >
            3
          </div>
          <div className={classes["text-step"]}>
            <span>STEP 3</span>
            <p>ADD-ONS</p>
          </div>
        </div>
        <div className={classes["box-step"]}>
          <div
            className={
              classes["number-step"] +
              " " +
              (currentStep === 4 ? classes["active"] : "")
            }
          >
            4
          </div>
          <div className={classes["text-step"]}>
            <span>STEP 4</span>
            <p>SUMMARY</p>
          </div>
        </div>
      </div>
      <div className={classes["main-content"]}>
        <div className={classes["info"]}>
          <div>{renderComponent()}</div>
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
                  onClick={() => dispatch(setStep(currentStep - 1))}
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className={classes["btn-next"]}
                onClick={stepHanlder}
              >
                {currentStep < 4 ? "Next Step" : "Confirm"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
