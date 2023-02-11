import {useLoaderData} from 'react-router-dom'

function Perserverance(props){
    const data = useLoaderData()
    console.log(data)
    return <h1>perserverance!</h1>
}

export default Perserverance