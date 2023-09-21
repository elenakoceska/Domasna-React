import React from 'react';
import {Ingredients} from './ingredients';
export class Recipe extends React.Component{

    render(){
        return(
            <>
            <p style={{backgroundColor: 'lightpink',padding: '10px', display:'inline-block'}}>Put the ingredients into a bowl or large jug, 
            then whisk to a smooth batter.Set aside for 30 mins to rest if you have time, or start cooking straight away.</p>
            <Ingredients/>
            </>
        )
    }
}