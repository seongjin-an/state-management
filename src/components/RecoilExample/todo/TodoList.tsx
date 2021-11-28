import {useRecoilValue} from "recoil";
import {filteredTodoListState, todoListState} from "./todoStore";
import TodoItem, {ITodo} from "./TodoItem";
import TodoItemCreator from "./TodoListCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

export default function TodoList() {
    // const todoList = useRecoilValue(todoListState);
    const todoList = useRecoilValue(filteredTodoListState)

    return (
        <>
             <TodoListStats />
             <TodoListFilters />
            <TodoItemCreator />

            {todoList.map((todoItem: ITodo) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
}