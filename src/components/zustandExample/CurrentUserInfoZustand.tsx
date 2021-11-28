import React, {ChangeEvent, useEffect} from 'react'
import axios, {AxiosResponse} from "axios";
import create, {GetState, SetState} from "zustand";
interface IUserStore{
    id: string,
    setId: (id:string) => void;
    userName: string,
    fetchUserName: (id:string) => void
}
const useStore = create<IUserStore>((set: SetState<IUserStore>, get: GetState<IUserStore>) => ({
    id: "2",
    setId: (id:string) => set({id: id}),
    userName: "jimmy",
    fetchUserName: async (id) => {
        const response = await axios.get(`/username?id=${id}`)
        set({userName: response.data.name})
    }
}))

function CurrentUser() {
    const userName = useStore(state => state.userName)
    return(
        <>
            <div>{userName}</div>
        </>
    )
}

export default function CurrentUserInfoZustand(){
    const fetchUserName = useStore(state => state.fetchUserName)

    return(
        <>
            <CurrentUser />
            <input onChange={(e)=>fetchUserName(e.target.value)}/>
        </>
    )
}