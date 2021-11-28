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

function App() {
  return (
    <div>
      {/*<TestMocking/>*/}
      {/*<Counter/>*/}

      {/*<MobxExample/>*/}
      {/*<TodoList store={observableTodoStore}/>*/}

      <RecoilRoot>
        <FontButton/>
        <Text/>
        <CharacterCounter/>
        <br/>
        <br/>
        <TodoList/>
        <br/>
        <CurrentUserInfo/>
      </RecoilRoot>
    </div>
  );
}

export default App;
