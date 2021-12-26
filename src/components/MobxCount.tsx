import React, {useEffect} from "react";
import {observer} from 'mobx-react'
import {CountStore, CountStore2} from "../app/CountStore";

const MobxCounter = observer(() => {

    return(
        <>
            <h2>{CountStore.count}</h2>
            <button onClick={CountStore.increase}>increase</button>
            <button onClick={CountStore.decrease}>decrease</button>
            <button onClick={CountStore.fetchData}>fetch</button>
        </>
    )
})
export default MobxCounter