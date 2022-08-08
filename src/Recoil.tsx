import { atom } from "recoil";

// 共有するデータ
export const toggleState = atom<boolean>({
  key: "toggleState",
  default: true
});
