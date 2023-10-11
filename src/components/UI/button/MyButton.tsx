import classes from "./MyButton.module.css";

interface MyButtonProps {
  children: string;
  onClick: () => void;
}

const MyButton = (props: MyButtonProps) => {
  return (
    <button className={classes.myButton} onClick={props.onClick} type="button">
      {props.children}
    </button>
  );
};

export default MyButton;
