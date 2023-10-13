import {useEffect} from 'react';
import { firstAction, secondAction } from '../actions/HomeworkAction';
import {useSelector, useDispatch} from 'react-redux';



export const HomeworkFunc = () => {

    const dispatch = useDispatch();
    const homework_1 = useSelector(state=>state.HomeworkReducer.homework_1)
    const homework_2 = useSelector(state=>state.HomeworkReducer.homework_2);

    useEffect(()=>{
        dispatch(firstAction());
        dispatch(secondAction())

    },[dispatch])


    return(
        <div id="homework-func">
            <h2>{homework_1}</h2>
            <h2>{homework_2}</h2>
        </div>
    )
}

