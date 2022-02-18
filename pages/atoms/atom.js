import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const todosState = atom({
  key: "todos",
  //ダミーデータ
  default: [
    {
      id: 1,
      text: "test sample 1",
      status: "incomplete",
      priority: "高",
      createDate: "2022-2-1",
      updateDate: "2022-3-1",
    },
    {
      id: 2,
      text: "test sample 2",
      status: "progress",
      priority: "中",
      createDate: "2022-2-10",
      updateDate: "2022-3-10",
    },
    {
      id: 3,
      text: "test sample 3",
      status: "complete",
      priority: "低",
      createDate: "2022-2-20",
      updateDate: "2022-3-4",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
