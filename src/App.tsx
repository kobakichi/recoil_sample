import { RecoilRoot } from "recoil";
import "./styles.css";
import { ToggleA } from "./ToggleA";

export default function App() {
  return (
    <div className="App">
      <b>Recoil</b>
      <br />
      <RecoilRoot>
        <ToggleA />
      </RecoilRoot>
    </div>
  );
}
