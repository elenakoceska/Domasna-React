export const Adresa = ({Korisnici}) => {
    return(
        <div>
            <p>Users from Skopje:</p>
            <ul>
                {/* {usersFromSk.map((korisnik,i) => (
                <li key={i}>{korisnik.ime}</li> */}
                {Korisnici.adresa === "Skopje" }
                {/* ))} */}
            </ul>
        </div>
    )
}