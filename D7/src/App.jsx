// za Domashna:
// Nov proekt so setup na router v6 i 2 komponenti
// za Posts fetchot da se napravi vo App.jsx
// (Obicen tabelaren prikaz na propertijata na postovite)
// i Todos fectchot da se napravi vo samata komponenta
// (checkbox lista na elementi so OnChange handler na vrednosta zemena od https://jsonplaceholder.typicode.com/todos)
import {useState, useEffect} from 'react';
import {Posts} from './components/Posts';
import {Todos} from './components/Todos';
import { Routes, Route } from "react-router-dom";

export function App(){

  const [posts, setPosts] = useState([]);

  function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
         .then(res=>res.json())
         .then(json=> setPosts(json))
         .catch(err=>alert(err));
  }


  useEffect(()=>{
    getPosts();
  },[])


  return(
    <div id="app">
      <button onClick={getPosts}>Posts</button>
      <Routes>
        <Route path="/posts" element={<Posts seePosts={posts}/>} />
        <Route path="/todos" element={<Todos/>}/>
      </Routes>


    </div>
  )
}