import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';

const Counter = ({counter , inc, dec, reset}) => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="counter-block">
                    <div  className="counter" >{counter}</div>
                </div>
                <div className="btn-block">
                    <button onClick={inc} className="inc" >
                        <img src={process.env.PUBLIC_URL + "/pictures/Vectorplus.png"} alt='vectorplus' />
                    </button>
                    <button onClick={dec} className="dec" >
                        <div className="minus"></div>
                    </button>
                    <button onClick={reset} className="reset" >
                        <img src={process.env.PUBLIC_URL + "/pictures/Vector.png"} alt='vector' />
                        <img src={process.env.PUBLIC_URL + "/pictures/Vector2.png"} alt='vector2' />
                    </button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps,actions)(Counter) ;