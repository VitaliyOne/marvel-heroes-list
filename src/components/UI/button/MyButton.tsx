import classes from "./MyButton.module.css";

const MyButton = () => {
  return (
    <button className={classes.myButton} type="button">
      Search
    </button>
  );
};

export default MyButton;
