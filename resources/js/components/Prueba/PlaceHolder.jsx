import { method } from "lodash";
import { useEffect, useState } from "react";

const handleGetAllData = async() => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)
    return data
}

const handlePostData = async(value) => {
    const url = 'https://jsonplaceholder.typicode.com/posts/'
    const send={title:value}
    const response = await fetch(url,{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(send)
    })
    const data = await response.json();
    console.log(data)
    return data
}


export const PlaceHolder = () =>{

    const [holder, setHolder] = useState()

    useEffect(()=>{
        handleGetAllData()
        .then(data=>setHolder(data))
        setHolder()
    },[])
/*
    const handleSubmit = (e) => {
        e.preventDefault();
        handlePostData(title);
    };*/

    return(
        <>
            <form>
                <h1>Ingresar Nuevo Post:</h1>
                <input type="text" placeholder="Escribir nuevo post" />
                <button type="submit">Enviar</button>
            </form>

            <h1>Lista de PlaceHolder:</h1>
            <ul>
                <p>{holder && holder.map(obj =>(
                    <li key={obj.id}>
                        {obj.id} - {obj.title}
                        </li>
                ))}</p>
            </ul>
        </>
    )
}
