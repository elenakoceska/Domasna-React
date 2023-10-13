import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {sayHello} from './../actions/SayHelloActions';
import { sayGoodbye } from './../actions/SayHelloActions';
import { firstAction } from '../actions/HomeworkAction';
import { secondAction } from '../actions/HomeworkAction';

export class Hello extends React.Component{

    componentDidMount(){
        this.props.getGreeting();
        this.props.getHomework();
    }


    render(){
        return(
            <div id="hello">
                <h2>{this.props.greeting}</h2>
                <h2>{this.props.proba}</h2>
                <h2>{this.props.homework_1}</h2>
                <h2>{this.props.homework_2}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        greeting : state.SayHelloReducer.greeting,
        proba: state.SayHelloReducer.proba,
        
    }
};

const mapStateToProps_2 = (state) => {
    return{
        homework_1: state.HomeworkReducer.homework_1,
        homework_2: state.HomeworkReducer.homework_2
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getGreeting: () => {
            dispatch(sayHello()),
            dispatch(sayGoodbye()) 
        }
    }
};

const mapDispatchToProps_2 = (dispatch) => {
    return{
        getHomework: () => {
            dispatch(firstAction()),
            dispatch(secondAction())
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps, mapStateToProps_2, mapDispatchToProps_2)(Hello)



Hello.propTypes = {
    greeting: PropTypes.string,
    getGreeting: PropTypes.func,
    proba: PropTypes.string,
    getHomework: PropTypes.func,
    homework_1: PropTypes.string,
    homework_2:PropTypes.string
}