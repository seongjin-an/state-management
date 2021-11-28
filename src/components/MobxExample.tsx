import React from "react";
import {todoStore} from "../app/todoStore";
import {observableTodoStore} from "../app/observableTodoStore";

export default () => {
    const run = () => {
        todoStore.addTodo("read MobX tutorial");
        console.log(todoStore.report());

        todoStore.addTodo("try MobX");
        console.log(todoStore.report());

        todoStore.todos[0].completed = true;
        console.log(todoStore.report());

        todoStore.todos[1].task = "try MobX in own project";
        console.log(todoStore.report());

        todoStore.todos[0].task = "grok MobX tutorial";
        console.log(todoStore.report());
    }
    const runObservable = () => {
        observableTodoStore.addTodo("read MobX tutorial");
        observableTodoStore.addTodo("try MobX");
        observableTodoStore.todos[0].completed = true;
        observableTodoStore.todos[1].task = "try MobX in own project";
        observableTodoStore.todos[0].task = "grok MobX tutorial";
    }
    return(
        <div>
            <button onClick={run}>run</button>
            <button onClick={runObservable}>run observable</button>
        </div>
    )
}