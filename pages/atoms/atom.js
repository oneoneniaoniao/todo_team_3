import { atom } from "recoil";

export const todosState = atom({
  key:"todos",
  //ダミーデータ
  default:[{
    text: 'test sample 1',
      status: '着手前',
      priority: '高',
      createDate: '2022-2-1',
      updateDate: '2022-3-1',
  },{
    text: 'test sample 2',
      status: '進行中',
      priority: '中',
      createDate: '2022-2-10',
      updateDate: '2022-3-10',
  },{
    text: 'test sample 3',
    status: '完了',
    priority: '低',
    createDate: '2022-2-20',
    updateDate: '2022-3-4',
  }]
})