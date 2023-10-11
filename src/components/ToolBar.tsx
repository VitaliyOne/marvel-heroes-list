import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const ToolBar = ({ getNewOffset }) => {
  const [nameHero, setNameHero] = useState<string>("");
  const [offset, setOffset] = useState<string>("");

  const getNameHero = () => {
    setNameHero("");
    return nameHero;
  };

  const getOffsetValue = () => {
    getNewOffset(offset);
    setOffset(offset);
  };

  return (
    <div>
      <form className="toolbar">
        <MyInput
          type="text"
          placeholder="Name hero"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNameHero(event.target.value)
          }
          value={nameHero}
          pattern="^[a-zA-Z]"
        />
        <MyButton children="Search" onClick={getNameHero}></MyButton>
      </form>
      <form className="toolbar">
        <MyInput
          pattern="[0-9]*"
          type="text"
          placeholder="Offset"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setOffset(event.target.value)
          }
        />
        <MyButton children="Search" onClick={getOffsetValue}></MyButton>
      </form>
    </div>
  );
};

export default ToolBar;
