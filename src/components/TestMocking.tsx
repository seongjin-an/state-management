import React, {useState} from "react";
interface IPerson{
    name: string;
    age: number
}
interface IPeople{
    people: IPerson[]
}

const Item = ({name, age}: {name: string, age: number}) => {
    return(
        <li>
            name: {name} / age: {age}
        </li>
    )
}
const url = 'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=react'
export default () => {
    const [data, setData] = useState<IPeople|null>(null);
    const [error, setError] = useState<string>('');
    const handleClick = () => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then( json => {
                if(json.errorMessage){
                    throw new Error(json.errorMessage);
                }
                console.log('json.data:', json.data)
                setData(json.data)
            })
            .catch(error => {
                setError(`Something wrong ${error}`)
            })
    }
    const handleMockingButton = () => {
        fetch('/login')
            .then(response => {
                // console.log(response.json())
                return response.json()
            })
            .then(json => {
                console.log(JSON.stringify(json))
            })
    }
    if(error){
        return <p>{error}</p>
    }
    return(
    <div>
        <button onClick={handleClick}>fetch data</button>
        <button onClick={handleMockingButton}>fetch mock data</button>
        {data && (
            <ul>
                {data.people.map((person: IPerson, index) => {
                    return <Item key={`${person.name}_${person.age}_${index}`} name={person.name} age={person.age}/>
                })}
            </ul>
        )}
    </div>)
}