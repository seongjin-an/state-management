import {ChangeEvent} from "react";
import create, {GetState, SetState} from 'zustand'

interface ICharacterCounterStore{
    textState: string;
    setTextState: (text: string) => void;
}

const useStore = create<ICharacterCounterStore>((set:SetState<ICharacterCounterStore>, get: GetState<ICharacterCounterStore>)=>({
    textState: "",
    setTextState: (text) => set(() => ({textState: text}))
}))

export default function CharacterCounterZustand() {
    return (
        <div>
            <TextInput />
            <CharacterCount />
        </div>
    );
}
function CharacterCount() {
    const count = useStore(state => state.textState.length)

    return <>Character Count: {count}</>;
}
export function TextInput() {
    const [text, setText] = useStore(state => [
        state.textState,
        state.setTextState
    ])

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </div>
    );
}