import classes from "./MyInput.module.css";

const MyInput = (props) => {
  return (
    <input
      className={classes.myInput}
      {...props}
      placeholder={props.placeholder}
    />
  );
};

export default MyInput;
