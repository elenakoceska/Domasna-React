import {Link} from 'react-router-dom';
export const Nav = () =>{
    return(
        <ul id="nav">
            <li><Link to="/">Back to Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/album">Album</Link></li>
        </ul>
    )
}