import {action, autorun, flow, makeAutoObservable, makeObservable, observable} from "mobx";
import axios from "axios";
import {observableTodoStore} from "./observableTodoStore";

class Count{
    count: number = 0;
    constructor() {
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        makeObservable(this,{
            count: observable,
            increase: action,
            decrease: action,
            fetchData: flow
        })
        // makeAutoObservable(this)
    }
    increase(){
        console.log('increase')
        ++this.count;
    }
    decrease(){
        console.log('decrease')
        this.count--;
    }
    fetchData = function*(){
        // console.log('fetch data....')
        // const fetchTodo = async () => {
        //     console.log('fetching...');
        //     const resopnse = await axios.get('/todo');
        //     console.log('done!')
        //     return resopnse.data.todo.task;
        // }
        // try{
        //     const todo:string = yield fetchTodo()
        //     console.log('goodbye')
        //     // observableTodoStore.addTodo(todo);
        // }catch( error ){
        //     console.log(`error: ${error}`)
        // }
        console.log(1);
        const newapis = function (params: boolean) {
            return new Promise((res) => {
                window.setTimeout(function () {
                    if (params) {
                        res("ok");
                    } else {
                        res({message:"error"});
                    }
                }, 3000);
            });
        };
        try {
            const res:string = yield newapis(true);
            if (res === "ok") {
                console.log('goodbye')
            }
        } catch (e: unknown) {

        }
    }

}
export const CountStore2 = observable({
    count: 0,
    decrease:action("dsd", function() {
        CountStore2.count -= 1;
    }),
    increase: action(function () {
        CountStore2.count += 1;
    })
})
export const CountStore = new Count();