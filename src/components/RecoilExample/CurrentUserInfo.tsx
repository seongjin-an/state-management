import React, {ChangeEvent} from 'react'
import {atom, selector, selectorFamily, useRecoilState, useRecoilValue, useRecoilValueLoadable} from "recoil";
import axios, {AxiosResponse} from "axios";
import ErrorBoundary from "./ErrorBoundary";

const currentUserIDState = atom<number>({
    key: 'CurrentUserID',
    default: 1,
});

const tableOfUsers = [{name: "jimmy"}, {name: "ansj"}]

// const currentUserNameState = selector({
//     key: 'CurrentUserName',
//     get: ({get}) => {
//         return tableOfUsers[get(currentUserIDState)].name;
//     },
// });
const currentUserNameQuery = selectorFamily({
    key: 'CurrentUserName',
    get: (id:string) => async ()  => {
        const response = await axios.get(`/username?id=${id}`);
        return response.data.name;
    },

});
function CurrentUser() {
    const userName = useRecoilValueLoadable(currentUserNameQuery('2'));
    if(userName.state==='loading'){
        return <div>loading...</div>
    }
    if(userName.state==='hasError'){
        return <div>something wrong..</div>
    }
    return <>
        <div>{userName.contents}</div>
    </>
}

export default function CurrentUserInfo(){
    return(
        // <ErrorBoundary>
        //     <React.Suspense fallback={<div>Loading...</div>}>
                <CurrentUser />
            // </React.Suspense>
        // </ErrorBoundary>
    )
}