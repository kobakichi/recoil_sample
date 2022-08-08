import { useRecoilValue } from "recoil";
import { toggleState } from "../../Recoil";

export const ToggleC = () => {
  const toggle = useRecoilValue(toggleState);
  console.log("ToggleC");
  return (
    <div>
      <button>{toggle ? "true" : "false"}</button>
    </div>
  );
};
