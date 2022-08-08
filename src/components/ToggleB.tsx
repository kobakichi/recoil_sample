import { ToggleC } from "./ToggleC/ToggleC";

export const ToggleB = () => {
  // const [isOpen, setToggle] = useRecoilState(toggleState);
  console.log("ToggleB");

  return (
    <div>
      {/* {isOpen.toString()} */}
      {/* <button onClick={() => setToggle((prevState) => !prevState)}>B</button> */}
      <button>B</button>
      <ToggleC />
    </div>
  );
};
