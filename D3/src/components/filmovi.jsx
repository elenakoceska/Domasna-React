import PropTypes from 'prop-types';

export const Filmovi = ({filmovi}) => {
    console.log(filmovi);
    return(
        <div id='filmovi'>
             {/* <h2>{name}</h2>
            <p>:{date}</p>
            <a href={imbdLink}></a>
            <img src={imgUrl}/> */}

            <h2>{}</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Genre</th>
                        <th>Plot</th>
                        <th href="">Link</th>
                        <th>Img</th>
                    </tr>
                </thead>
                <tbody>
                    {filmovi.map((film, i) => {
                        return(
                           <tr key={i}>
                              <td><b>{film.name}</b></td>
                              <td>{film.date}</td>
                              <td>{film.genre}</td>
                              <td>{film.plot}</td>
                              <td>{film.imbdLink}</td>
                              <td>{film.imgUrl}</td>


                           </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

Filmovi.propTypes = {
    filmovi: PropTypes.arrayOf(PropTypes.object)
}



