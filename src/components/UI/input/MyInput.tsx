import classes from "./MyInput.module.css";

interface MyInpit {
  placeholder: string;
}
const MyInput = (props: MyInpit) => {
  return (
    <input
      className={classes.myInput}
      {...props}
      placeholder={props.placeholder}
    />
  );
};

export default MyInput;
