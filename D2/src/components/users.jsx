
export const Users = ({Korisnici}) => {
    console.log(Korisnici)

    return(
        <div id="users">
        <h2>Users info:</h2>
        {/* <ul>
            {Korisnici.map((korisnik, i) => {
                <li key={i}>{Korisnik}</li>
            })}
        </ul> */}
        
        <p>Ime: {Korisnici.ime}</p>
        <p>Prezime: {Korisnici.prezime}</p>
        <p>Adresa: {Korisnici.adresa}</p>
        <p>Godini: {Korisnici.godini}</p>
        </div>
    )
}
//}