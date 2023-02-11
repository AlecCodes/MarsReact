import {useLoaderData} from 'react-router-dom'

function Insight(props){
    const data = useLoaderData()
    console.log(data)
    return <h1>insight!</h1>
}

export default Insight