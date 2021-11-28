import React, {useEffect, useRef} from "react";
import create, {SetState} from "zustand";
interface IScratchStore{
    scratches: number;
    addScratches: () => void
}
const useStore = create<IScratchStore>((set: SetState<IScratchStore>) => ({
    scratches: 0,
    addScratches: () => set((state) => ({ scratches: state.scratches + 1}))
}))

export default function Scratch(){
    // const scratches = useStore(state => state.scratches)
    const scratchRef = useRef<number>(useStore.getState().scratches)
    const addScratches = useStore(state => state.addScratches)

    useEffect(() => {
        useStore.subscribe(
            (scratches: number) => {
                scratchRef.current = scratches
                console.log(scratches);
                console.log('scratchRef:', scratchRef.current)
                if(scratches > 3){
                    alert("too many...")
                }
            },
            (state) => state.scratches
        )
    }, [])

    return <div>
        {scratchRef.current}
        <br/>
        <button onClick={addScratches}>Add scratches</button>
    </div>
}