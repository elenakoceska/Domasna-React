// export const Age = ({korisnik, godini}) => {
    
//     return(
//         <div id="godini">
//             <h3>Users above 18 years old</h3>
//             {korisnik.godini > 18}
//             <h3>Less than 18 years old</h3>
//             {korisnik.godini < 18}
//             {/* <ul>
//                 {filteredUsers.map((korisnik,i) => (
//                 <li key={i}>{korisnik.ime}</li>
//                 ))}
//             </ul>
//             <p>Less than 18:</p>
//             {Korisnici.filter((korisnik) => korisnik.godini < 18)} */}
//         </div>
//     )
// }

export const Age = ({Korisnici}) =>{
console.log(Korisnici)
return(
    <div id="age">
        <p>Olden than 18:</p>
        {Korisnici.godini > 18 }
    </div>
)
}