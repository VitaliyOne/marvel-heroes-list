import classes from "./MySelect.module.css";

interface Select {
  defaultValue: string;
  value: string;
  option: {
    value: string;
    name: string;
  }[];
  onChange: (event: string) => void;
}

const MySelect = (props: Select) => {
  return (
    <select
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
      className={classes.mySelect}
    >
      <option disabled value="">
        {props.defaultValue}
      </option>
      {props.option.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
