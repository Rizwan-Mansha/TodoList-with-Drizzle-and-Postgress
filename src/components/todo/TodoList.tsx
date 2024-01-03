'use client'
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

type Props = {};
const TodoList = ({}: Props) => {
const [todoItem, setTodoItem] = useState("");

const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  console.log(e);
setTodoItem(e.currentTarget.value);
}

const handleAddTodo = async () => {
  const response = await fetch("/api/todo", {
    method: "POST",
    body: JSON.stringify({todoItem})
  });

  const res = await response.json();
  console.log(res);


}
  return (
    <div className="flex justify-center items-center">
      <div className="w-[60%] bg-gray-200 shadow-md rounded-md p-6">
        <div className="flex justify-center items-end gap-6 w-full">
          <div className="w-[70%]">
            <Input id="todoItem" placeholder="Enter Todo here" value={todoItem} onChange={(e)=>handleInputChange(e)} />
          </div>
          <div className="">
            <Button onClick={handleAddTodo}>
              <PlusIcon size={18} />
              Add Todo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
