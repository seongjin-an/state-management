import {useRecoilValue} from "recoil";
import {ITodo, useStore} from "./todoStore";
import TodoItemZustand from "./TodoItemZustand";
import TodoItemCreatorZustand from "./TodoListCreatorZustand";
import TodoListFiltersZustand from "./TodoListFiltersZustand";
import TodoListStatsZustand from "./TodoListStatsZustand";

export default function TodoListZustand() {
    // const todoList = useRecoilValue(todoListState);
    const todoList= useStore(state => {
        return state.filteredTodoListState()
    })
    console.log(typeof todoList)
    // console.log('11111111111:', todoList())
    return (
        <>
             <TodoListStatsZustand />
             <TodoListFiltersZustand />
             <TodoItemCreatorZustand/>
            {todoList.map((todoItem: ITodo) => (
                <TodoItemZustand key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
}