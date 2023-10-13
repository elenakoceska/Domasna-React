import {useEffect} from 'react';
import { sayHello, sayGoodbye } from '../actions/SayHelloActions';
import {useSelector, useDispatch} from 'react-redux';
//import { firstAction, secondAction } from '../actions/HomeworkAction';



export const HelloFunc = () => {

    const dispatch = useDispatch();
    const greeting = useSelector(state=>state.SayHelloReducer.greeting)
    const proba = useSelector(state=>state.SayHelloReducer.proba)
    // const homework_1 = useSelector(state=>state.HomeworkReducer.homework_1)
    // const homework_2 = useSelector(state=>state.HomeworkReducer.homework_2)

    useEffect(()=>{
        dispatch(sayHello());
        dispatch(sayGoodbye());
        // dispatch(firstAction());
        // dispatch(secondAction())

    },[dispatch])


    return(
        <div id="hello-func">
            <h2>{greeting}</h2>
            <h2>{proba}</h2>
            {/* <h2>{homework_1}</h2>
            <h2>{homework_2}</h2> */}
        </div>
    )
}

