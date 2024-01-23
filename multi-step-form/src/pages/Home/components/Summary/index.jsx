import { useDispatch, useSelector } from "react-redux";

import classes from "./style.module.scss";
import { setStep } from "../../action";

const Summary = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.homeReducer.step);
  const currentOrder = useSelector((state) => state.homeReducer.order);

  const backHandler = () => {
    dispatch(setStep(currentStep - 1));
  };
  const nextHandler = () => {
    dispatch(setStep(currentStep + 1));
  };
  const changeHandler = () => {
    dispatch(setStep(currentStep - 2));
  };

  console.log(currentOrder);
  const totalPrice = () => {
    const catPrice = currentOrder.price;
    const arrayPrice = currentOrder.addOns?.map((item) => {
      return item.addOnPrice;
    });
    const totalArrayPrice = arrayPrice.reduce((acc, cv) => acc + cv, 0);
    return catPrice + totalArrayPrice;
  };

  return (
    <div className={classes["summary"]}>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className={classes["payout"]}>
        <div className={classes["box-title"]}>
          <div className={classes["title"]}>
            <h3>
              {currentOrder.type} ({currentOrder.duration})
            </h3>
            <button onClick={changeHandler}>Change</button>
          </div>
          <span>${currentOrder.price}/mo</span>
        </div>
        {currentOrder.addOn.map((item) => (
          <>
            <div className={classes["sub-title"]}>
              <div>
                <p>{item.addOn}</p>
              </div>
              <div>
                <p>+${item.addOnPrice}/mo</p>
              </div>
            </div>
          </>
        ))}
        <div className={classes["total"]}>
          <p>Total (per month)</p>
          <p className={classes["total-price"]}>+${totalPrice()}/mo</p>
        </div>
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

export default Summary;
