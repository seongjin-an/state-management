import React, {ChangeEvent, useState} from "react";
import {ITodo, useStore} from "./todoStore";

export default function TodoItemCreatorZustand() {
    const [inputValue, setInputValue] = useState<string>('');
    const [todoList, setTodoList] = useStore( state => [
        state.todoListState,
        state.setTodoListState,
    ])

    const addItem = () => {
        const newTodo = {
            id: getId().toString(),
            text: inputValue,
            isComplete: false,
        } as ITodo
        setTodoList([...todoList, newTodo]);
        console.log('newTodo:', newTodo, ' / todoList:', todoList)
        setInputValue('');
    };
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setInputValue(value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    );
}

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
    return id++;
}