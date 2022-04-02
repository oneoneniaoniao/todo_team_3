import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { idState, todosState } from "atoms/atom";
import Today from "./Today";

const useOnSubmitHooks = () => {
  const router = useRouter();
  const [todos, setTodos] = useRecoilState(todosState);
  const [id, setId] = useRecoilState(idState);

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
    router.push("/");
  };

  return { onSubmit };
};

export default useOnSubmitHooks;
