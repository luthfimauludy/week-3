import classes from "./style.module.scss";

import iconThanks from "../../../../assets/img/icon-thank-you.svg";

const LastPage = () => {
  return (
    <div className={classes["last-page"]}>
      <div className={classes["img"]}>
        <img width={50} height={50} src={iconThanks} alt="Icon thank you" />
      </div>
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default LastPage;
