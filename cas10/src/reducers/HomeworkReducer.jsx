const initialState = {
    homework_1: "Homework_1",
    homework_2: "Homework_2",

}


const HomeworkReducer = (state=initialState, action) => {

    switch(action.type){

        case "HOMEWORK_1":
            return{
                ...state,
                homework_1: action.payload
            };

        case "HOMEWORK_2":
            return{
               ...state,
               homework_2: action.payload
        }

        default: return state;
    }

}


    
export default HomeworkReducer;
