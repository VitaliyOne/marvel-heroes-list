import classes from "./MyInput.module.css";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  pattern?: string;
  value?: string;
}
const MyInput = (props: MyInputProps) => {
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
