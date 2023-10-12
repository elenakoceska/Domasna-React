
import PropTypes from 'prop-types';


export function Login({type, placeholder, changeInput, renderTextArea, value, onChange}){
    return(
        <div>
         {renderTextArea  ?
               <textarea
               rows={8}
               cols={20}
               value={value}
               onChange={onChange}
             /> 
             : <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />}
            {value === "comment" &&
             <button type="button" onClick={changeInput} className="eye-button">
             <i className={renderTextArea ? "fa fa-comment-o":"fa fa-comments-o"}></i>
             </button>
            }
            

             </div>
    )
}

Login.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    renderTextArea: PropTypes.bool,
    changeInput: PropTypes.func,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}