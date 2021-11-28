import React from 'react';
import TestMocking from "./components/TestMocking";
import Counter from "./features/counter/Counter";
import MobxExample from "./components/MobxExample";
import TodoList from "./components/RecoilExample/todo/TodoList";
import {observableTodoStore} from "./app/observableTodoStore";
import {RecoilRoot} from "recoil";
import FontButton from "./components/RecoilExample/FontButton";
import Text from "./components/RecoilExample/Text";
import CharacterCounter from "./components/RecoilExample/CharacterCounter";
import CurrentUserInfo from "./components/RecoilExample/CurrentUserInfo";
import TextZustand from "./components/zustandExample/TextZustand";
import CharacterCounterZustand from "./components/zustandExample/CharacterCounterZustand";
import TodoListZustand from "./components/zustandExample/todo/TodoListZustand";
import CurrentUserInfoZustand from "./components/zustandExample/CurrentUserInfoZustand";
import Scratch from "./components/zustandExample/Scratches";

function App() {
  return (
    <div>
      {/*<TestMocking/>*/}
      {/*<Counter/>*/}

      {/*<MobxExample/>*/}
      {/*<TodoList store={observableTodoStore}/>*/}

      {/*<RecoilRoot>*/}
      {/*  <FontButton/>*/}
      {/*  <TextZustand/>*/}
      {/*  <CharacterCounterZustand/>*/}
      {/*  <br/>*/}
      {/*  <br/>*/}
      {/*  <TodoList/>*/}
      {/*  <br/>*/}
      {/*  <CurrentUserInfoZustand/>*/}
      {/*</RecoilRoot>*/}

      {/*<TextZustand/>*/}
      {/*<CharacterCounterZustand/>*/}
      {/*<TodoListZustand/>*/}
      {/*<br/>*/}
      {/*<CurrentUserInfoZustand/>*/}
      <Scratch/>
    </div>
  );
}

export default App;
