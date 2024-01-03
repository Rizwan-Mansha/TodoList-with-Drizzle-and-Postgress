import TodoList from "@/components/todo/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="m-20">
        <div className="text-center  mb-2">Todo List</div>
      <TodoList />
      </div>
    </main>
  );
}
