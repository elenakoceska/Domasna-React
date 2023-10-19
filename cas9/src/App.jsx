import {useEffect, useState} from "react";
import {Routes, Route} from 'react-router-dom'
import {Gallery} from './components/Gallery';
import {Home} from './components/Home';
import {Nav} from './components/Nav';
import axios from 'axios';
import {API_URL} from './utils/contains'
import './css/App.css';
import { GalleryContext } from "./utils/GalleryContext";
import {Album} from './components/Album'
import {AlbumContext} from "./utils/AlbumContext";

export function App(){

    const [photos, setPhotos] = useState([]);
    const [selectedImage, setSelectedImage] = useState("")
    //const [deleteImage, setDeletedImage] = useState("")
    const [selectedAlbum, setSelectedAlbum] = useState("")

    useEffect(()=>{
       axios(`${API_URL}/photos`)
        .then(res=> setPhotos(res.data))
        .catch(err=>alert(err))
    },[])
    
        // {axios.get("https://jsonplaceholder.typicode.com/albums")
        //     .then(res=>(res.data))
        //     .catch(err=>alert(err.message))}
   

    // function openPhoto(url){
    //     setSelectedImage(url);
    //     console.log(url)
    // }

    // function closePhoto(){
    //     setSelectedImage("")
    // }


    async function deleteImg(id) {
        const deletedImage = await axios.delete(`${API_URL}/photos` + id)       //("https://jsonplaceholder.typicode.com" + id ); 
        alert(deletedImage.status);
        setSelectedImage([...selectedImage.filter(selectedImage=> selectedImage.id !== id)])
    }

    return(
        <div id="app">
            <Nav/>
              <GalleryContext.Provider value={{selectedImage,setSelectedImage}}>
             
            <Routes>
            
            <Route path="/" element={<Home/>}/>

            <Route path="/gallery" element={
            <Gallery 
            listOfPhotos={photos} 
            button onClick={()=>{deleteImg(selectedImage.id)}}
            //deleteImg={deleteImg}
            // setImage={openPhoto} 
            // selektiranaSlika={selectedImage}
            // removePhoto={closePhoto}
            />}
            />
           
         </Routes>
         </GalleryContext.Provider>

         
         <AlbumContext.Provider value={{selectedAlbum, setSelectedAlbum}}>
            <Routes>
                <Route path="/album" element={<Album albumList={selectedAlbum}/>}/>
               
            </Routes>
         </AlbumContext.Provider>
        </div>
    )
}