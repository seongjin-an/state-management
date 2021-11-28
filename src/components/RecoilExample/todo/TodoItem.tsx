import React, {ChangeEvent} from "react";
import {useRecoilState} from "recoil";
import {todoListState} from "./todoStore";
export interface ITodo{
    id:string;
    text:string;
    isComplete: boolean;
}
export interface ITodoItemProps{
    item: ITodo
}

const TodoItem = ({item}: ITodoItemProps) => {
    const [todoList, setTodoList] = useRecoilState<ITodo[]>(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        });

        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText} />
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    );
}
export default TodoItem
function replaceItemAtIndex(arr: ITodo[], index: number, newValue: ITodo) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: ITodo[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

