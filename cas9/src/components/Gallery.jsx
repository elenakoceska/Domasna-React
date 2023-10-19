import{useContext} from 'react';
import PropTypes from 'prop-types';
import {Popup} from './Popup';
import { GalleryContext } from '../utils/GalleryContext';

// setImage, selektiranaSlika, removePhoto
export const Gallery = ({listOfPhotos, }) => {
    const {selectedImage,setSelectedImage,deleteImg} = useContext(GalleryContext)

    return(
        <div id="gallery">
            {listOfPhotos.slice(0,50).map((photo)=>{
                return(

                    <div 
                    className="image-holder" 
                    key={photo.id}
                    onClick={()=>{setSelectedImage(photo.url)}}
                    //onClick={()=>{deleteImg(photo.id)}}
                    >
                        <img src={photo.thumbnailUrl} alt={photo.title}/>
                        {/* <button onClick={()=>{deleteImg(photo.id)}}>Delete</button> */}


                    </div>
                )})}
                {selectedImage !== "" && 
                <Popup 
                deleteImg={deleteImg}
                // zatvoriSlika={removePhoto} 
                // izbranaSlika={selektiranaSlika}
                />}
        </div>
    )
}

Gallery.propTypes = {
    listOfPhotos: PropTypes.arrayOf(PropTypes.object),
    deleteImg: PropTypes.func
    // setImage: PropTypes.func,
    // selektiranaSlika:PropTypes.string,
    // removePhoto:PropTypes.func
}