import {Link} from 'react-router-dom'

function map(props){
    return (
    <div>
    <h1>MAP COMPONENT!</h1>
    <Link to = '/perserverance'><div>Perserverance</div></Link>
    <Link to ='/curiosity'><div>Curiosity</div></Link>
    <Link to = '/insight'><div>Insight</div></Link>
    </div>
    )
}

export default map