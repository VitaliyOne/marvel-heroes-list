import classes from "./MyButton.module.css";

interface MyButtonProps {
  children: string;
}

const MyButton = (props: MyButtonProps) => {
  return (
    <button className={classes.myButton} type="button">
      {props.children}
    </button>
  );
};

export default MyButton;
