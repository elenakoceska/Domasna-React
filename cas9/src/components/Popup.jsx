//import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GalleryContext } from '../utils/GalleryContext';
import {AlbumContext} from '../utils/AlbumContext'

// {zatvoriSlika,izbranaSlika}
export const Popup = () => {
    
    const {selectedImage, setSelectedImage,deleteImg, setSelectedAblum} = useContext(GalleryContext, AlbumContext)
    return(
        <div id="popup">
            <button onClick={()=>{setSelectedImage("")}} className="close-popup">
                &times;

            </button>
            <div className="popup-container">
                <img src={selectedImage} alt=""/>

            </div>
            <div className="delete-img">
                <button onClick={()=>{deleteImg("")}} className="delete-img">
                    &times;
                    </button>
            </div>

            <div id="show-albums">
                <button onClick={()=>{setSelectedAblum("")}}>

                </button>

            </div>

        </div>
    )
}

// Popup.propTypes = {
//     zatvoriSlika:PropTypes.func,
//     izbranaSlika:PropTypes.string
// }