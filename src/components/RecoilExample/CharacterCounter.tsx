import {useRecoilState, useRecoilValue} from "recoil";
import {charCountState, textState} from "./counterStore";
import {ChangeEvent} from "react";

export default function CharacterCounter() {
    return (
        <div>
            <TextInput />
            <CharacterCount />
        </div>
    );
}
function CharacterCount() {
    const count = useRecoilValue(charCountState);

    return <>Character Count: {count}</>;
}
export function TextInput() {
    const [text, setText] = useRecoilState(textState);

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