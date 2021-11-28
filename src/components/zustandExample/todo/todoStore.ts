import create, {GetState, SetState} from 'zustand'
import {devtools} from "zustand/middleware";

export interface ITodo{
    id:string;
    text:string;
    isComplete: boolean;
}
interface IStats{
    totalNum: number
    totalCompletedNum: number
    totalUncompletedNum: number
    percentCompleted: number
}
interface ITodoStore{
    todoListState: ITodo[];
    setTodoListState: (list: ITodo[]) => void;
    todoListFilterState: string;
    setTodoListFilterState: (filter:string) => void;
    filteredTodoListState: () => ITodo[];
    todoListStatsState: () => IStats;
}

export const useStore = create<ITodoStore>(devtools((set: SetState<ITodoStore>, get: GetState<ITodoStore>) => ({
    todoListState: [],
    setTodoListState: (list) => set({ todoListState: list}),
    todoListFilterState: "Show All",
    setTodoListFilterState: (filter:string) => set({ todoListFilterState: filter}),
    filteredTodoListState: () => {
        const filter = get().todoListFilterState;
        const list = get().todoListState;

        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.isComplete);
            case 'Show Uncompleted':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
    todoListStatsState: () => {
        const todoList = get().todoListState;
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    }
})))