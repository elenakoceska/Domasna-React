import { useState } from "react";
import {Login} from './login'


export const Dropdown = ()=> {
    const [selectValue, setSelectedValue] = useState("");
    const [comment, setComment] = useState("");
    

const options = [
    {value: "", placeholder: "Select one"},
    {value: 'Facebook', label: "Facebook"},
    {value: 'Instagram', label: "Instagram"},
    {value: 'SnapChat', label: 'SnapChat'}
]

    // const handleChange = (e) => {
    //     setSelectedValue(e.target.value)
    // };

    return(
        <div id="dropdown">
           <select
           defaultValue={[0]}
           value = {selectValue}
           onChange={(e) =>{setSelectedValue(e.target.value)}}
           >

            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>

            ))}
            
           </select>
           <Login
           type="text"
           name="comment"
           placeholder="Enter Comment"
           value={comment}
           onChange={(e)=>{setComment(e.target.value)}}
           
           />
           {/* <button onClick>Send comment</button> */}

        </div>
    )

}

