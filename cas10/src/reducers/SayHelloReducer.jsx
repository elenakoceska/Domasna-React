const initialState = {
    greeting:"Hi !",
    proba: "Bye"

}


const SayHelloReducer = (state=initialState, action) => {

    switch(action.type){

        case "SAY_HELLO":
            return{
                ...state,
                greeting: action.payload
            };

            case "GOODBYE":
        return{
            ...state,
            proba: action.payload
        }

        default: return state;
    }

}


    
export default SayHelloReducer;
