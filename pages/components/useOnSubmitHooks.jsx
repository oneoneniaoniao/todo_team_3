import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { idState, todosState } from "../atoms/atom";
import Today from "./Today";

const [todos, setTodos] = useRecoilState(todosState);
const [id, setId] = useRecoilState(idState);

export const useOnSubmitHooks = () => {
  const router = useRouter();

  const { today } = Today();
  const onSubmit = (e) => { 
    setId(++id); 
    const newTodo = { 
      id: id, 
      createDate: today(), 
      updateDate: today(), 
      ...e, 
    }; 
    setTodos([...todos, newTodo]); 
    router.push("/") 
  }; 

  return {onSubmit};
};


