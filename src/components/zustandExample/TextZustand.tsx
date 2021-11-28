import React from "react";
import create, {GetState, SetState} from 'zustand'
interface IFontStore{
    fontSize: number;
    increaseFontSize: () => void;
    trigger: boolean,
    toggleTrigger: () => void;
}
// interface IFontLabel{
//     fontSize: number
//     increaseFontSize: () => void
//     fontSizeLabel: string
//     trigger: boolean
//     toggleTrigger: () => void
// }

const useStore = create<IFontStore>((set: SetState<IFontStore>, get: GetState<IFontStore>) => ({
    fontSize: 14,
    increaseFontSize: (): void =>  {
        set((state) => ({fontSize: state.fontSize + 1}))
    },
    trigger: false,
    toggleTrigger: () => set((state) => ({trigger: !state.trigger}))
}))

function FontLabel(){
    const {fontSize, increaseFontSize, fontSizeLabel, trigger, toggleTrigger} = useStore((state => ({
        fontSize: state.fontSize,
        increaseFontSize: state.increaseFontSize,
        fontSizeLabel: state.fontSize+'px',
        trigger: state.trigger,
        toggleTrigger: state.toggleTrigger
    })),
        (oldState, newState) => oldState.trigger === newState.trigger
        )
    return(
        <>
            <div style={{ fontSize }}>current font size: ${fontSizeLabel}</div>
            <button onClick={increaseFontSize}>size up</button>
            <button onClick={toggleTrigger}>toggle: {trigger.toString()}</button>
        </>
    )
}

export default function TextZustand() {
    const fontSize = useStore(state => state.fontSize)
    const increaseFontSize = useStore(state => state.increaseFontSize)
    return <>
        <p style={{fontSize}}>This text will increase in size too.</p>
        <FontLabel/>
    </>
}