import React, {ChangeEvent} from "react";
import {useState} from "react";
import {useSetRecoilState} from "recoil";
import {todoListState} from "./todoStore";
import {ITodo} from "./TodoItem";

export default function TodoItemCreator() {
    const [inputValue, setInputValue] = useState<string>('');
    const setTodoList = useSetRecoilState<ITodo[]>(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList: ITodo[]) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ] as ITodo[]);
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