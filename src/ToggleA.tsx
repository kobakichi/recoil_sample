import { useSetRecoilState } from "recoil";
import { ToggleB } from "./components/ToggleB";
import { toggleState } from "./Recoil";

export const ToggleA = () => {
  const isOpen = useSetRecoilState(toggleState);
  const handleClick = () => {
    isOpen((prevState) => !prevState);
    console.log("ToggleA");
  };

  return (
    <div>
      <button onClick={handleClick}>A</button>
      <ToggleB />
    </div>
  );
};
