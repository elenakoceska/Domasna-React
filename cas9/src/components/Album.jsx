// Za Domashna: Da se dodade ushte eden context za Albums 
// (prevzemeni od https://jsonplaceholder.typicode.com vo App.jsx fajlot ) 
// i preku context preneseni i mapirani vo Album.jsx fajl, kako i da se dodade 
// button za brishenje na selektiranata slika od popup koj ke ja izbrise slikata 
// od array-ot i 
// ke go zatvori popup-ot isto da bide napraveno koristejki context


// https://jsonplaceholder.typicode.com/albums

import{useContext} from 'react';
import PropTypes from 'prop-types';
//import {Popup} from './Popup';
import { Popup } from './Popup';
import {AlbumContext} from '../utils/AlbumContext';

export const Album = ({albumList})=> {
    const {selectedAlbum, setSelectedAlbum} = useContext(AlbumContext)

    return(
        <div id="album">
            {albumList.map((album) => {
                return(
                    <div
                    key={album}
                    onClick={()=>{setSelectedAlbum(album.url)}}
                    >
                    </div>

               ) })}
            {/* <button onClick={()=>{setSelectedAlbum("")}}>
                </button>  */}
                <p>{selectedAlbum}</p>
                <Popup/>

        </div>
    )
}

Album.propTypes = {
   // albumList: PropTypes.arrayOf(PropTypes.object)
   albumList:PropTypes.string
}

