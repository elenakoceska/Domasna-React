
import {Users} from './components/users';
import {Age} from './components/Age';
import {Adresa} from './components/Adresa';


var Korisnici = [
  {id: 0, ime:"Elena", prezime:"Koceska", adresa: "Skopje", godini: 39},
  {id: 1, ime:"Ivan", prezime:"Ivanovski", adresa: "Tetovo", godini: 30},
  {id: 2, ime:"Dragana", prezime:"Petrovska", adresa: "Veles", godini: 17},
  {id: 3, ime:"Marko", prezime:"Markovski", adresa: "Skopje", godini: 16},

];


export function App() {
  return(
   <div id="app">
    <Users Korisnici = {Korisnici}/>
    <Age Korisnici = {Korisnici}/> 
    <Adresa Korisnici={Korisnici}/>
    
  
  </div>
  )
}