import { useLoaderData } from "react-router-dom"

function Curiosity(props){
    const data = useLoaderData()
    console.log(data)
    return (<h1>curiosity!</h1>)
}

export default Curiosity