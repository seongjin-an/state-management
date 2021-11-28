import {action, autorun, computed, flow, makeAutoObservable, makeObservable, observable} from "mobx";
import axios from "axios";

interface ITodo{
    task: string;
    assignee: string|null
    completed:boolean;
}

class ObservableTodoStore {
    todos: ITodo[] = [];
    pendingRequests = 0;

    constructor() {
        makeObservable(this, {
            todos: observable,
            pendingRequests: observable,
            completedTodosCount: computed,
            report: computed,
            addTodo: action,
            fetchData: flow
        });
        // makeAutoObservable(this);
        autorun(() => console.log(this.report));
    }

    get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    get report() {
        if (this.todos.length === 0)
            return "<none>";
        const nextTodo = this.todos.find(todo => todo.completed === false);
        return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    addTodo(task: string) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        });
    }

    fetchData = function*(){
        console.log('fetch data....')
        const fetchTodo = async () => {
            const resopnse = await axios.get('/todo');
            return resopnse.data.todo.task;
        }
        try{
            const todo:string = yield fetchTodo()
            observableTodoStore.addTodo(todo);
        }catch( error ){
            console.log(`error: ${error}`)
        }
    }
}
export const observableTodoStore = new ObservableTodoStore();
