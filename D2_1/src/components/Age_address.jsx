export const Age_address = ({korisnik1, korisnik2, korisnik3, korisnik4}) =>{
    return(
        <div id="age_address">
            <h4><u>User 1:</u></h4>
            {korisnik1.godini > 18 && korisnik1.adresa === "Skopje" ?
                <div>
                <p>Ime:{korisnik1.ime}</p>
                <p>Prezime: {korisnik1.prezime} </p>
                <p>Adresa: {korisnik1.adresa}</p>
                <p>Godini: {korisnik1.godini}</p>
            </div> : <p>Less then 18 or not from Skopje</p>
                }

            <h4><u>User 2:</u></h4>
            {korisnik2.godini > 18 && korisnik2.adresa === "Skopje" ?
                <div>
                <p>Ime:{korisnik2.ime}</p>
                <p>Prezime: {korisnik2.prezime} </p>
                <p>Adresa: {korisnik2.adresa}</p>
                <p>Godini: {korisnik2.godini}</p>
            </div> : <p>Less then 18 or not from Skopje</p>
                }

            <h4><u>User 3:</u></h4>
            {korisnik3.godini > 18 && korisnik3.adresa === "Skopje" ?
                <div>
                <p>Ime:{korisnik3.ime}</p>
                <p>Prezime: {korisnik3.prezime} </p>
                <p>Adresa: {korisnik3.adresa}</p>
                <p>Godini: {korisnik3.godini}</p>
            </div> : <p>Less then 18 or not from Skopje</p>
                }

            <h4><u>User 4:</u></h4>
            {korisnik4.godini > 18 && korisnik4.adresa === "Skopje" ?
                <div>
                <p>Ime:{korisnik4.ime}</p>
                <p>Prezime: {korisnik4.prezime} </p>
                <p>Adresa: {korisnik4.adresa}</p>
                <p>Godini: {korisnik4.godini}</p>
            </div> : <p>Less then 18 or not from Skopje</p>

                }
        </div>
    )
}