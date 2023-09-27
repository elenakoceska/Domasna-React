import { Age_address } from "./components/Age_address";



let user1 = {id: 0, ime:"Elena", prezime:"Koceska", adresa: "Skopje", godini: 39};
let user2 = {id: 1, ime:"Ivan", prezime:"Ivanovski", adresa: "Tetovo", godini: 30};
let user3 = {id: 2, ime:"Dragana", prezime:"Petrovska", adresa: "Veles", godini: 17};
let user4 = {id: 3, ime:"Marko", prezime:"Markovski", adresa: "Skopje", godini: 16};


export function App() {
  return(
    <div id="app">
      <Age_address korisnik1={user1} korisnik2={user2} korisnik3={user3} korisnik4={user4}/>

    </div>
  )
}