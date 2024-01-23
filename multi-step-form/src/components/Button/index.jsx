import classes from "./style.module.scss";

const Button = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className={classes["btn"]}>
      <button>{text}</button>
    </div>
  );
};

export default Button;
