import {useRecoilState} from "recoil";
import {ChangeEvent} from "react";
import {useStore} from "./todoStore";

export default function TodoListFiltersZustand() {
    const [filter, setFilter] = useStore(state => [
        state.todoListFilterState,
        state.setTodoListFilterState
    ])

    const updateFilter = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        setFilter(value);
    };

    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    );
}