// da se prikaze vo dopolnitelen fajl lista od filmovi (minimum 5 po vash izbor)
// izdefinirana vo app so atributi {name,date,genre plot,imdbLink,imgUrl}
// listata na atributi prikaz i slika za filmot (slikata ne mora da bide od imdb),
// dopolnitelno da se koristi proptypes za definiranje na prenesenite properties.
// imdb.com e stranata za filmovite

import {Filmovi} from './components/filmovi';

import IMAGE1 from './images/life is beautiful.jpg';
import IMAGE2 from './images/gladiator.jpg';
import IMAGE3 from './images/lion king.jpg';
import IMAGE4 from './images/beautiful mind.jpg';
import IMAGE5 from './images/departed.jpg';

let movies = [
    {
        name: "Life is Beautiful", 
        date: "1997", 
        genre:"drama", 
        plot:"When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.", 
        imbdLink:"https://www.imdb.com/title/tt0118799/?ref_=chttp_i_27", 
        imgUrl: <img src={IMAGE1} alt="image1"/>,
    },

    {
        name: "Gladiator",
        date: "2000",
        genre: "action",
        plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        imbdLink: "https://www.imdb.com/title/tt0172495/?ref_=chttp_i_36",
        imgUrl: <img src={IMAGE2} alt="image2"/>,
    },
    {
        name: "The Lion King",
        date: "1994",
        genre: "animation",
        plot: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        imbdLink: "https://www.imdb.com/title/tt0110357/?ref_=chttp_i_37",
        imgUrl: <img src={IMAGE3} alt="image3"/>,
    },

    {
        name: "A Beautiful Mind",
        date: "2001",
        genre: "biography",
        plot: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
        imbdLink: "https://www.imdb.com/title/tt0268978/?ref_=chttp_i_146",
        imgUrl: <img src={IMAGE4} alt="image4"/>,
    },

    {
       name: "The Departed",
       date: "2006",
       genre: "chrime",
       plot: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
       imbdLink: "https://www.imdb.com/title/tt0407887/?ref_=chttp_i_40",
       imgUrl: <img src={IMAGE5} alt="image5"/>,
    },
];


export function App() {
    return(
        <div id="app">
            <Filmovi filmovi={movies}/>
            

        </div>
    )
}

