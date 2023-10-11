import classes from "./MyInput.module.css";

interface MyInpit {
  placeholder: string;
  type: string;
  pattern?: string;
  value?: string;
}
const MyInput = (props: MyInpit) => {
  return (
    <input
      className={classes.myInput}
      {...props}
      pattern={props.pattern}
      placeholder={props.placeholder}
    />
  );
};

export default MyInput;
